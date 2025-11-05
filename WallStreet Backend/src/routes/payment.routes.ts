import { Router } from 'express';
import { initiatePayment, webhookHandler, getTransactionById } from '../controllers/payment.controller';

const router = Router();

/**
 * @swagger
 * /api/payments/initiate:
 *   post:
 *     summary: Initiate GCash payment for booking
 *     tags: [Payments]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               amount:
 *                 type: number
 *               booking:
 *                 type: object
 *     responses:
 *       200:
 *         description: Payment initiated with checkout URL
 */
router.post('/initiate', initiatePayment);

/**
 * @swagger
 * /api/payments/webhook:
 *   post:
 *     summary: GCash webhook for payment status updates
 *     tags: [Payments]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       200:
 *         description: Webhook processed
 */
router.post('/webhook', webhookHandler);

/**
 * @swagger
 * /api/payments/{id}:
 *   get:
 *     summary: Get payment/transaction details
 *     tags: [Payments]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Transaction details
 */
router.get('/:id', getTransactionById);

export default router;