import { Request, Response, NextFunction } from 'express';
import PDFDocument from 'pdfkit';
import { BookingService } from '../services/BookingService';

const bookingService = new BookingService();

export async function generateReceipt(req: Request, res: Response, next: NextFunction) {
  try {
    const { id } = req.params;
    const booking = await bookingService.getBookingById(id);

    if (booking.status !== 'confirmed') {
      return res.status(400).json({ error: 'Cannot generate receipt for unconfirmed booking' });
    }

    const doc = new PDFDocument({ margin: 50 });
    
    // Set response headers
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename=receipt-${booking.bookingReference}.pdf`);
    
    doc.pipe(res);

    // Header
    doc.fontSize(20).text('WallStreet Sport', { align: 'center' });
    doc.fontSize(14).text('Basketball Court Reservation', { align: 'center' });
    doc.moveDown();
    doc.fontSize(10).text('Official Receipt', { align: 'center' });
    doc.moveDown(2);

    // Receipt Details
    doc.font('Helvetica-Bold').fontSize(12).text(`Receipt #: ${booking.bookingReference}`);
    doc.moveDown();
    
    doc.fontSize(10);
    doc.text(`Customer Name: ${booking.customerName}`);
    doc.text(`Email: ${booking.email}`);
    doc.text(`Phone: ${booking.phone}`);
    doc.moveDown();
    
    doc.text(`Booking Date: ${booking.bookingDate.toLocaleDateString()}`);
    doc.text(`Time Slot: ${booking.displayTime}`);
    doc.text(`Period: ${booking.period === 'evening' ? 'Evening (Premium)' : 'Morning (Standard)'}`);
    doc.moveDown();
    
    doc.text(`Rate: PHP ${booking.rate}/hour`);
    doc.text(`Downpayment Paid: PHP ${Math.floor(Number(booking.rate) / 2)}`);
    doc.text(`Remaining Balance: PHP ${Math.ceil(Number(booking.rate) / 2)}`);
    doc.moveDown();
    
    if (booking.transactions?.[0]) {
      doc.text(`Payment Method: ${booking.transactions[0].paymentMethod.toUpperCase()}`);
      doc.text(`Transaction ID: ${booking.transactions[0].gcashTransactionId || booking.transactions[0].id}`);
      doc.text(`Payment Date: ${booking.transactions[0].paymentDate?.toLocaleString() || 'N/A'}`);
    }
    doc.moveDown(2);
    
    // Footer
    doc.fontSize(8).text('Thank you for choosing WallStreet Sport!', { align: 'center' });
    doc.text('Please show this receipt upon arrival.', { align: 'center' });
    doc.text('First to pay always gets the slot.', { align: 'center' });

    doc.end();
  } catch (err) {
    next(err);
  }
}