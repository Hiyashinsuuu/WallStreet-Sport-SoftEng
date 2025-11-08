import { Request, Response, NextFunction } from 'express';
import { PaymentService } from '../services/PaymentService';
import { BookingService } from '../services/BookingService';

const paymentService = new PaymentService();
const bookingService = new BookingService();

export async function initiatePayment(req: Request, res: Response, next: NextFunction) {
  try {
    const { amount, booking } = req.body;

    if (!amount || !booking) {
      return res.status(400).json({ error: 'Amount and booking details required' });
    }

    // Create booking first
    const newBooking = await bookingService.createBooking({
      name: booking.name,
      email: booking.email,
      contact: booking.contact,
      date: booking.date,
      timeSlot: booking.timeSlot
    });

    // Initiate payment
    const paymentResult = await paymentService.initiateGcashPayment(newBooking.id, amount);

    res.json({
      bookingId: newBooking.id,
      bookingReference: newBooking.bookingReference,
      ...paymentResult
    });
  } catch (err) {
    next(err);
  }
}

export async function webhookHandler(req: Request, res: Response, next: NextFunction) {
  try {
    const tx = await paymentService.handleGcashWebhook(req.body);
    res.json({ success: true, transaction: tx });
  } catch (err) {
    next(err);
  }
}

export async function getTransactionById(req: Request, res: Response, next: NextFunction) {
  try {
    const { id } = req.params;
    const transaction = await paymentService.getTransactionById(id);
    res.json(transaction);
  } catch (err) {
    next(err);
  }
}