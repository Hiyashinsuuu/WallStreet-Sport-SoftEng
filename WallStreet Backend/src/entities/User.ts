import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Booking } from './Booking';


export enum UserRole {
CUSTOMER = 'customer',
ADMIN = 'admin'
}


@Entity()
export class User {
@PrimaryGeneratedColumn('uuid')
id!: string;


@Column({ unique: true })
email!: string;


@Column()
passwordHash!: string;


@Column({ nullable: true })
name?: string;


@Column({ type: 'enum', enum: UserRole, default: UserRole.CUSTOMER })
role!: UserRole;


@OneToMany(() => Booking, (b) => b.user)
bookings?: Booking[];
}