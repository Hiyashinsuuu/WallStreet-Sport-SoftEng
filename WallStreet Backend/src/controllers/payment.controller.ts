import { Request, Response } from 'express';
import { PaymentService } from '../services/PaymentService';


const paymentService = new PaymentService();


export async function initiatePayment(req: Request, res: Response) {
const { bookingId, amount } = req.body;
const out = await paymentService.initiateGcashPayment(bookingId, amount);
res.json(out);
}


export async function webhookHandler(req: Request, res: Response) {
try {
const tx = await paymentService.handleGcashWebhook(req.body);
res.json({ ok: true, tx });
} catch (e: any) {
res.status(e.status || 500).json({ error: e.message || 'Webhook processing failed' });
}
}