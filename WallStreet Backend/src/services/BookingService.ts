import { AppDataSource } from '../ormconfig';
import { Booking, BookingStatus } from '../entities/Booking';
import { Slot } from '../entities/Slot';
import { User } from '../entities/User';


export class BookingService {
bookingRepo = AppDataSource.getRepository(Booking);
slotRepo = AppDataSource.getRepository(Slot);


async createBooking(userId: string, slotId: string, notes?: string) {
const user = await AppDataSource.getRepository(User).findOneBy({ id: userId });
if (!user) throw { status: 404, message: 'User not found' };
const slot = await this.slotRepo.findOneBy({ id: slotId });
if (!slot) throw { status: 404, message: 'Slot not found' };
// Check if slot already has confirmed booking
const existing = await this.bookingRepo.findOne({ where: { slot: { id: slotId }, status: BookingStatus.CONFIRMED } });
if (existing) throw { status: 409, message: 'Slot already booked' };


// Create booking as pending; confirmation after payment
const booking = this.bookingRepo.create({ user, slot, status: BookingStatus.PENDING, notes });
return this.bookingRepo.save(booking);
}


async confirmBooking(bookingId: string) {
const booking = await this.bookingRepo.findOne({ where: { id: bookingId }, relations: ['slot'] });
if (!booking) throw { status: 404, message: 'Booking not found' };
// Re-check overlapping confirmed bookings for the slot times
const slot = booking.slot;
const overlapping = await this.bookingRepo
.createQueryBuilder('b')
.leftJoinAndSelect('b.slot', 'slot')
.where('slot.start < :end AND slot.end > :start', { start: slot.start, end: slot.end })
.andWhere('b.status = :status', { status: BookingStatus.CONFIRMED })
.getMany();
if (overlapping.length > 0) throw { status: 409, message: 'Overlapping confirmed booking exists' };


booking.status = BookingStatus.CONFIRMED;
await this.bookingRepo.save(booking);
// mark slot unavailable
slot.available = false;
await this.slotRepo.save(slot);
return booking;
}


async getUserBookings(userId: string) {
return this.bookingRepo.find({ where: { user: { id: userId } }, relations: ['slot'] });
}


async getAllBookings() {
return this.bookingRepo.find({ relations: ['slot', 'user'] });
}
}