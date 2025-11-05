import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { Transaction } from './Transaction';

@Entity('bookings')
export class Booking {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true, name: 'booking_reference' })
  bookingReference: string;

  // Customer info
  @Column({ name: 'customer_name' })
  customerName: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  // Booking details
  @Column({ type: 'date', name: 'booking_date' })
  bookingDate: Date;

  @Column({ name: 'time_slot' })
  timeSlot: string;  // '08:00-09:00'

  @Column({ name: 'display_time' })
  displayTime: string;

  @Column('decimal', { precision: 10, scale: 2 })
  rate: number;

  @Column()
  period: 'morning' | 'afternoon' | 'evening';

  // Status
  @Column({ default: 'pending' })
  status: 'pending' | 'confirmed' | 'cancelled';

  @Column({ type: 'text', nullable: true })
  notes?: string;

  @OneToMany(() => Transaction, transaction => transaction.booking)
  transactions: Transaction[];

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}