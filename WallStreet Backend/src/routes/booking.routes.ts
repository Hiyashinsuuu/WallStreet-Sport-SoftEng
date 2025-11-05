import { Router } from 'express';
import {
  getAvailableSlots,
  createBooking,
  getAllBookings,
  getBookingById,
  updateBookingStatus,
  deleteBooking,
  getBookingStats
} from '../controllers/booking.controller';
import { authMiddleware, adminOnly } from '../middleware/auth';

const router = Router();

/**
 * @swagger
 * /api/bookings/slots:
 *   get:
 *     summary: Get available time slots for a date
 *     tags: [Bookings]
 *     parameters:
 *       - in: query
 *         name: date
 *         required: true
 *         schema:
 *           type: string
 *           format: date
 *     responses:
 *       200:
 *         description: List of time slots with availability
 */
router.get('/slots', getAvailableSlots);

/**
 * @swagger
 * /api/bookings:
 *   post:
 *     summary: Create a new booking (pending payment)
 *     tags: [Bookings]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               contact:
 *                 type: string
 *               date:
 *                 type: string
 *                 format: date
 *               timeSlot:
 *                 type: object
 *     responses:
 *       201:
 *         description: Booking created
 */
router.post('/', createBooking);

/**
 * @swagger
 * /api/bookings:
 *   get:
 *     summary: Get all bookings (Admin only)
 *     tags: [Bookings]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of all bookings
 */
router.get('/', authMiddleware, adminOnly, getAllBookings);

/**
 * @swagger
 * /api/bookings/stats:
 *   get:
 *     summary: Get booking statistics (Admin only)
 *     tags: [Bookings]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Booking statistics
 */
router.get('/stats', authMiddleware, adminOnly, getBookingStats);

/**
 * @swagger
 * /api/bookings/{id}:
 *   get:
 *     summary: Get single booking by ID
 *     tags: [Bookings]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Booking details
 */
router.get('/:id', getBookingById);

/**
 * @swagger
 * /api/bookings/{id}/status:
 *   patch:
 *     summary: Update booking status (Admin only)
 *     tags: [Bookings]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               status:
 *                 type: string
 *                 enum: [confirmed, cancelled]
 *     responses:
 *       200:
 *         description: Booking status updated
 */
router.patch('/:id/status', authMiddleware, adminOnly, updateBookingStatus);

/**
 * @swagger
 * /api/bookings/{id}:
 *   delete:
 *     summary: Delete booking (Admin only)
 *     tags: [Bookings]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Booking deleted
 */
router.delete('/:id', authMiddleware, adminOnly, deleteBooking);

export default router;