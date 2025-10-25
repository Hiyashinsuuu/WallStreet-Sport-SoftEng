import axios from 'axios';
import { Transaction, PaymentStatus } from '../entities/Transaction';
import { AppDataSource } from '../ormconfig';


export class PaymentService {
txRepo = AppDataSource.getRepository(Transaction);


async initiateGcashPayment(bookingId: string, amount: number) {
// Placeholder: call GCash API here
// Build request payload per GCash docs (client must input keys as env vars)
const providerRef = `gcash_${Date.now()}`;


const tx = this.txRepo.create({ booking: { id: bookingId } as any, provider: 'gcash', providerReference: providerRef, status: PaymentStatus.INITIATED });
await this.txRepo.save(tx);


// You should call the real GCash endpoint. Here we return a simulated checkout URL
return { transactionId: tx.id, checkoutUrl: `${process.env.FRONTEND_URL}/checkout?tx=${tx.id}` };
}


async handleGcashWebhook(payload: any) {
// process webhook payload
// verify signature if provided by GCash
const providerRef = payload.reference;
const tx = await this.txRepo.findOne({ where: { providerReference: providerRef }, relations: ['booking'] });
if (!tx) throw { status: 404, message: 'Transaction not found' };


if (payload.status === 'success') {
tx.status = PaymentStatus.SUCCESS;
await this.txRepo.save(tx);
// confirm booking
const bookingService = new (require('./BookingService').BookingService)();
await bookingService.confirmBooking(tx.booking.id);
} else {
tx.status = PaymentStatus.FAILED;
await this.txRepo.save(tx);
}
return tx;
}
}