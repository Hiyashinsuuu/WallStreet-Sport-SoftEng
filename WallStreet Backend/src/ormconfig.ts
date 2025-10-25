import { DataSource } from 'typeorm';
import { User } from './entities/User';
import { Slot } from './entities/Slot';
import { Booking } from './entities/Booking';
import { Transaction } from './entities/Transaction';
import 'dotenv/config';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [__dirname + '/entities/*.ts'],
  synchronize: true,
  logging: false,
});