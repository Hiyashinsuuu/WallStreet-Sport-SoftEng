import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Booking } from './Booking';


@Entity()
export class Slot {
@PrimaryGeneratedColumn('uuid')
id!: string;


@Column({ type: 'timestamp' })
start!: Date;


@Column({ type: 'timestamp' })
end!: Date;


@Column({ default: true })
available!: boolean;


@OneToMany(() => Booking, (b) => b.slot)
bookings?: Booking[];
}