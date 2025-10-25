import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Booking } from './Booking';


export enum PaymentStatus {
INITIATED = 'initiated',
SUCCESS = 'success',
FAILED = 'failed'
}


@Entity()
export class Transaction {
@PrimaryGeneratedColumn('uuid')
id!: string;


@ManyToOne(() => Booking)
@JoinColumn()
booking!: Booking;


@Column()
provider!: string; // e.g., 'gcash'


@Column({ type: 'enum', enum: PaymentStatus, default: PaymentStatus.INITIATED })
status!: PaymentStatus;


@Column({ nullable: true })
providerReference?: string;


@Column({ type: 'json', nullable: true })
metadata?: any;
}