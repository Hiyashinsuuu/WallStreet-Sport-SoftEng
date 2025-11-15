import { Request, Response, NextFunction } from 'express';
import { BookingService } from '../services/BookingService';

const bookingService = new BookingService();

export async function getAvailableSlots(req: Request, res: Response, next: NextFunction) {
  try {
    const { date } = req.query;

    if (!date || typeof date !== 'string') {
      return res.status(400).json({ error: 'Date parameter required' });
    }

    const slots = await bookingService.getAvailableSlots(date);
    res.json(slots);
  } catch (err) {
    next(err);
  }
}

export async function createBooking(req: Request, res: Response, next: NextFunction) {
  try {
    const { name, email, contact, date, timeSlot } = req.body;

    // Validation
    if (!name || !email || !contact || !date || !timeSlot) {
      return res.status(400).json({ error: 'All fields required' });
    }

    const booking = await bookingService.createBooking({
      name,
      email,
      contact,
      date,
      timeSlot
    });

    res.status(201).json(booking);
  } catch (err) {
    next(err);
  }
}

export async function getAllBookings(req: Request, res: Response, next: NextFunction) {
  try {
    const bookings = await bookingService.getAllBookings();
    
    // Format for frontend
    const formatted = bookings.map(b => {
      // PostgreSQL date type can return as string or Date
      let dateStr: string;
      const bookingDate = b.bookingDate as any;
      
      if (typeof bookingDate === 'string') {
        dateStr = bookingDate.split('T')[0];
      } else if (bookingDate instanceof Date) {
        dateStr = bookingDate.toISOString().split('T')[0];
      } else {
        dateStr = String(bookingDate).split('T')[0];
      }

      return {
        id: b.id,
        customerName: b.customerName,
        email: b.email,
        phone: b.phone,
        date: dateStr,
        time: b.displayTime,
        duration: '1 hour',
        paymentMethod: b.transactions?.[0]?.paymentMethod || 'GCash',
        totalAmount: Number(b.rate),
        status: b.status,
        createdAt: b.createdAt instanceof Date 
          ? b.createdAt.toISOString()
          : String(b.createdAt),
        transactions: b.transactions?.map(t => ({
          id: t.id,
          referenceNumber: t.referenceNumber,
          screenshotPath: t.screenshotPath,
          status: t.status
        }))
      };
    });

    res.json(formatted);
  } catch (err) {
    next(err);
  }
}

export async function getBookingById(req: Request, res: Response, next: NextFunction) {
  try {
    const { id } = req.params;
    const booking = await bookingService.getBookingById(id);
    res.json(booking);
  } catch (err) {
    next(err);
  }
}

export async function updateBookingStatus(req: Request, res: Response, next: NextFunction) {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (!status || !['confirmed', 'cancelled'].includes(status)) {
      return res.status(400).json({ error: 'Invalid status' });
    }

    const booking = await bookingService.updateBookingStatus(id, status);
    res.json(booking);
  } catch (err) {
    next(err);
  }
}

export async function deleteBooking(req: Request, res: Response, next: NextFunction) {
  try {
    const { id } = req.params;
    const result = await bookingService.deleteBooking(id);
    res.json(result);
  } catch (err) {
    next(err);
  }
}

export async function getBookingStats(req: Request, res: Response, next: NextFunction) {
  try {
    const stats = await bookingService.getBookingStats();
    res.json(stats);
  } catch (err) {
    next(err);
  }
}