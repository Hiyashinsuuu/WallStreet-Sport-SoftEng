import { Router } from 'express';
import { generateReceipt } from '../controllers/receipt.controller';

const router = Router();

/**
 * @swagger
 * /api/receipts/{id}:
 *   get:
 *     summary: Generate PDF receipt for booking
 *     tags: [Receipts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: PDF receipt
 *         content:
 *           application/pdf:
 *             schema:
 *               type: string
 *               format: binary
 */
router.get('/:id', generateReceipt);

export default router;
