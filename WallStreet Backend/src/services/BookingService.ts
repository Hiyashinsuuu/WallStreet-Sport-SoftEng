import { AppDataSource } from '../ormconfig';
import { Booking } from '../entities/Booking';
import { TimeSlot } from '../entities/TimeSlot';
import { Transaction } from '../entities/Transaction';

interface CreateBookingDTO {
  name: string;
  email: string;
  contact: string;
  date: string; 
  timeSlot: {
    time: string;
    displayTime: string;
    rate: number;
    period: 'morning' | 'evening';
  };
}

export class BookingService {
  private bookingRepo = AppDataSource.getRepository(Booking);
  private timeSlotRepo = AppDataSource.getRepository(TimeSlot);

  private generateBookingReference(): string {
    return `WS-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
  }

  async getAvailableSlots(date: string) {
    const allSlots = await this.timeSlotRepo.find({ where: { isActive: true } });
    
    const bookedSlots = await this.bookingRepo.find({
      where: { 
        bookingDate: new Date(date),
        status: 'confirmed'  
      },
      select: ['timeSlot']
    });

    const bookedTimeSlots = new Set(bookedSlots.map(b => b.timeSlot));

    return allSlots.map(slot => ({
      time: slot.timeRange,
      displayTime: slot.displayTime,
      rate: Number(slot.rate),
      available: !bookedTimeSlots.has(slot.timeRange),
      period: slot.period
    }));
  }

  async createBooking(data: CreateBookingDTO) {
    const existing = await this.bookingRepo.findOne({
      where: {
        bookingDate: new Date(data.date),
        timeSlot: data.timeSlot.time,
        status: 'confirmed'
      }
    });

    if (existing) {
      throw { status: 409, message: 'This time slot is already booked' };
    }

    const booking = this.bookingRepo.create({
      bookingReference: this.generateBookingReference(),
      customerName: data.name,
      email: data.email,
      phone: data.contact,
      bookingDate: new Date(data.date),
      timeSlot: data.timeSlot.time,
      displayTime: data.timeSlot.displayTime,
      rate: data.timeSlot.rate,
      period: data.timeSlot.period,
      status: 'pending'
    });

    return await this.bookingRepo.save(booking);
  }

  async confirmBooking(bookingId: string) {
    const booking = await this.bookingRepo.findOne({ where: { id: bookingId } });
    if (!booking) {
      throw { status: 404, message: 'Booking not found' };
    }

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

  async getAllBookings() {
    return await this.bookingRepo.find({
      order: { createdAt: 'DESC' },
      relations: ['transactions']
    });
  }

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

  async updateBookingStatus(id: string, status: 'confirmed' | 'cancelled') {
    const booking = await this.getBookingById(id);
    booking.status = status;
    return await this.bookingRepo.save(booking);
  }

  async deleteBooking(id: string) {
    const result = await this.bookingRepo.delete(id);
    if (result.affected === 0) {
      throw { status: 404, message: 'Booking not found' };
    }
    return { success: true };
  }

  async getBookingStats() {
    const allBookings = await this.bookingRepo.find();
    const today = new Date().toISOString().split('T')[0];
    
    const todayBookings = allBookings.filter(b => 
      b.bookingDate.toISOString().split('T')[0] === today
    );
    
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