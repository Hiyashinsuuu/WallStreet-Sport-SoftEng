import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('time_slots')
export class TimeSlot {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true, name: 'time_range' })
  timeRange: string; 

  @Column({ name: 'display_time' })
  displayTime: string; 

  @Column('decimal', { precision: 10, scale: 2 })
  rate: number;

  @Column()
  period: 'morning' | 'evening' | 'afternoon';

  @Column({ name: 'is_active', default: true })
  isActive: boolean;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;
}