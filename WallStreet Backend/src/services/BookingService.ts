import { AppDataSource } from '../ormconfig';
import { Booking } from '../entities/Booking';
import { TimeSlot } from '../entities/TimeSlot';
import { Transaction } from '../entities/Transaction';

interface CreateBookingDTO {
  name: string;
  email: string;
  contact: string;
  date: string;  // ISO date string
  timeSlot: {
    time: string;
    displayTime: string;
    rate: number;
    period: 'morning' | 'afternoon' | 'evening';
  };
}

export class BookingService {
  private bookingRepo = AppDataSource.getRepository(Booking);
  private timeSlotRepo = AppDataSource.getRepository(TimeSlot);

  // Generate unique booking reference
  private generateBookingReference(): string {
    return `WS-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
  }

  // Get available slots for a specific date
  async getAvailableSlots(date: string) {
    
    const allSlots = await this.timeSlotRepo.find({ where: { isActive: true } });
    
    // Get booked slots for this date - now using string comparison
    const bookedSlots = await this.bookingRepo
      .createQueryBuilder('booking')
      .where('booking.bookingDate = :date', { date })
      .andWhere('booking.status = :status', { status: 'confirmed' })
      .getMany();

  

    const bookedTimeSlots = new Set(bookedSlots.map(b => b.timeSlot));

    // Map to frontend format
    return allSlots.map(slot => ({
      time: slot.timeRange,
      displayTime: slot.displayTime,
      rate: Number(slot.rate),
      available: !bookedTimeSlots.has(slot.timeRange),
      period: slot.period
    }));
  }

  // Create new booking (pending status)
  async createBooking(data: CreateBookingDTO) {
    
    // Check if slot is already booked - string comparison
    const existing = await this.bookingRepo
      .createQueryBuilder('booking')
      .where('booking.bookingDate = :date', { date: data.date })
      .andWhere('booking.timeSlot = :timeSlot', { timeSlot: data.timeSlot.time })
      .andWhere('booking.status = :status', { status: 'confirmed' })
      .getOne();

    if (existing) {
      throw { status: 409, message: 'This time slot is already booked' };
    }

    // Create booking - store date as string '2024-11-22'
    const booking = this.bookingRepo.create({
      bookingReference: this.generateBookingReference(),
      customerName: data.name,
      email: data.email,
      phone: data.contact,
      bookingDate: data.date,  // Store as string directly
      timeSlot: data.timeSlot.time,
      displayTime: data.timeSlot.displayTime,
      rate: data.timeSlot.rate,
      period: data.timeSlot.period,
      status: 'pending'
    });

    const savedBooking = await this.bookingRepo.save(booking);
    
    return savedBooking;
  }

  // Confirm booking after successful payment
  async confirmBooking(bookingId: string) {
    const booking = await this.bookingRepo.findOne({ where: { id: bookingId } });
    if (!booking) {
      throw { status: 404, message: 'Booking not found' };
    }

    // Double-check no conflicts (race condition protection)
    const conflict = await this.bookingRepo.findOne({
      where: {
        bookingDate: booking.bookingDate,
        timeSlot: booking.timeSlot,
        status: 'confirmed'
      }
    });

    if (conflict && conflict.id !== bookingId) {
      throw { status: 409, message: 'Slot was just booked by someone else' };
    }

    booking.status = 'confirmed';
    return await this.bookingRepo.save(booking);
  }

  // Get all bookings (admin)
  async getAllBookings() {
    return await this.bookingRepo.find({
      order: { createdAt: 'DESC' },
      relations: ['transactions']
    });
  }

  // Get single booking
  async getBookingById(id: string) {
    const booking = await this.bookingRepo.findOne({
      where: { id },
      relations: ['transactions']
    });
    
    if (!booking) {
      throw { status: 404, message: 'Booking not found' };
    }
    
    return booking;
  }

  // Update booking status (admin)
  async updateBookingStatus(id: string, status: 'confirmed' | 'cancelled') {
    const booking = await this.getBookingById(id);
    booking.status = status;
    return await this.bookingRepo.save(booking);
  }

  // Delete booking (admin)
  async deleteBooking(id: string) {
    const result = await this.bookingRepo.delete(id);
    if (result.affected === 0) {
      throw { status: 404, message: 'Booking not found' };
    }
    return { success: true };
  }

  // Get booking stats (admin dashboard)
  async getBookingStats() {
    const allBookings = await this.bookingRepo.find();
    const today = new Date().toISOString().split('T')[0]; // '2024-11-22'
    
    // Now bookingDate is a string, so direct comparison works
    const todayBookings = allBookings.filter(b => {
      const bookingDateStr = String(b.bookingDate); // Cast to string to satisfy TypeScript
      return bookingDateStr === today;
    });
    
    const confirmedBookings = allBookings.filter(b => b.status === 'confirmed');
    const totalRevenue = confirmedBookings.reduce((sum, b) => sum + Number(b.rate), 0);
    const pendingCount = allBookings.filter(b => b.status === 'pending').length;

    return {
      totalBookings: allBookings.length,
      todayBookings: todayBookings.length,
      totalRevenue,
      pendingBookings: pendingCount
    };
  }
}