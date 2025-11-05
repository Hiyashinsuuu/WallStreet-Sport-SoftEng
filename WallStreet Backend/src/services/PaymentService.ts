import axios from 'axios';
import { AppDataSource } from '../ormconfig';
import { Transaction } from '../entities/Transaction';
import { BookingService } from './BookingService';

export class PaymentService {
  private txRepo = AppDataSource.getRepository(Transaction);
  private bookingService = new BookingService();

  async initiateGcashPayment(bookingId: string, amount: number) {
    const providerRef = `gcash_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

    const tx = this.txRepo.create({
      booking: { id: bookingId } as any,
      providerReference: providerRef,
      status: 'initiated',
      amount,
      paymentMethod: 'gcash'
    });
    await this.txRepo.save(tx);

    try {
      if (process.env.GCASH_API_URL && process.env.GCASH_CLIENT_ID && process.env.GCASH_CLIENT_SECRET) {
        const payload = {
          amount,
          reference: providerRef,
          callback_url: `${process.env.BACKEND_URL || 'http://localhost:4000'}/api/payments/webhook`,
          return_url: `${process.env.FRONTEND_URL}/payment-complete?tx=${tx.id}`
        };

        const tokenResp = await axios.post(`${process.env.GCASH_API_URL}/oauth/token`, {
          client_id: process.env.GCASH_CLIENT_ID,
          client_secret: process.env.GCASH_CLIENT_SECRET,
          grant_type: 'client_credentials'
        });
        const accessToken = tokenResp.data.access_token;

        const resp = await axios.post(
          `${process.env.GCASH_API_URL}/payments/checkout`,
          payload,
          { headers: { Authorization: `Bearer ${accessToken}`, 'Content-Type': 'application/json' } }
        );

        const checkoutUrl = resp.data.checkout_url || resp.data.redirect_url;
        
        tx.checkoutUrl = checkoutUrl;
        await this.txRepo.save(tx);
        
        return { transactionId: tx.id, checkoutUrl };
      } else {
        const checkoutUrl = `${process.env.FRONTEND_URL || 'http://localhost:5173'}/mock-checkout?tx=${tx.id}&ref=${providerRef}`;
        tx.checkoutUrl = checkoutUrl;
        await this.txRepo.save(tx);
        
        return { transactionId: tx.id, checkoutUrl };
      }
    } catch (err: any) {
      tx.status = 'failed';
      await this.txRepo.save(tx);
      throw { status: 500, message: err.message || 'Payment initiation failed' };
    }
  }

  async handleGcashWebhook(payload: any) {
    const providerRef = payload.reference || payload.referenceId;
    
    const tx = await this.txRepo.findOne({ 
      where: { providerReference: providerRef }, 
      relations: ['booking'] 
    });
    
    if (!tx) {
      throw { status: 404, message: 'Transaction not found' };
    }

    const paymentStatus = payload.status?.toLowerCase();
    
    if (paymentStatus === 'success' || paymentStatus === 'completed' || paymentStatus === 'paid') {
      tx.status = 'success';
      tx.gcashTransactionId = payload.transactionId || payload.gcash_transaction_id;
      tx.paymentDate = new Date();
      await this.txRepo.save(tx);

      if (tx.booking?.id) {
        await this.bookingService.confirmBooking(tx.booking.id);
      }
    } else if (paymentStatus === 'failed' || paymentStatus === 'cancelled') {
      tx.status = 'failed';
      await this.txRepo.save(tx);
    }

    return tx;
  }

  async getTransactionById(id: string) {
    const tx = await this.txRepo.findOne({
      where: { id },
      relations: ['booking']
    });
    
    if (!tx) {
      throw { status: 404, message: 'Transaction not found' };
    }
    
    return tx;
  }
}
