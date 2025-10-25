import { Request, Response } from 'express';
import PDFDocument from 'pdfkit';
import { AppDataSource } from '../ormconfig';


export async function generateReceipt(req: Request, res: Response) {
const bookingId = req.params.id;
const repo = AppDataSource.getRepository('Booking');
const booking: any = await repo.findOne({ where: { id: bookingId }, relations: ['user', 'slot'] });
if (!booking) return res.status(404).json({ error: 'Booking not found' });


const doc = new PDFDocument();
res.setHeader('Content-Type', 'application/pdf');
res.setHeader('Content-Disposition', `attachment; filename=receipt-${bookingId}.pdf`);
doc.text('Receipt');
doc.text(`Booking ID: ${booking.id}`);
doc.text(`User: ${booking.user.email} (${booking.user.name})`);
doc.text(`Slot: ${booking.slot.start} - ${booking.slot.end}`);
doc.text(`Status: ${booking.status}`);
doc.end();
doc.pipe(res);
}