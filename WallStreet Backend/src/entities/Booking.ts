import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { User } from './User';
import { Slot } from './Slot';


export enum BookingStatus {
PENDING = 'pending',
CONFIRMED = 'confirmed',
CANCELLED = 'cancelled'
}


@Entity()
export class Booking {
@PrimaryGeneratedColumn('uuid')
id!: string;


@ManyToOne(() => User, (u) => u.bookings)
@JoinColumn()
user!: User;


@ManyToOne(() => Slot, (s) => s.bookings)
@JoinColumn()
slot!: Slot;


@Column({ type: 'enum', enum: BookingStatus, default: BookingStatus.PENDING })
status!: BookingStatus;


@Column({ nullable: true })
notes?: string;
}