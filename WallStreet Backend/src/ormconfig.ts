import { DataSource } from 'typeorm';
import { User } from './entities/User';
import { TimeSlot } from './entities/TimeSlot';
import { Booking } from './entities/Booking';
import { Transaction } from './entities/Transaction';
import 'dotenv/config';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 5432,
  username: process.env.DB_USERNAME || 'postgres',
  password: process.env.DB_PASSWORD || 'postgres',
  database: process.env.DB_NAME || 'wallstreet_db',
  entities: [User, TimeSlot, Booking, Transaction],
  synchronize: process.env.NODE_ENV !== 'production', 
  logging: process.env.NODE_ENV === 'development',
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false
});