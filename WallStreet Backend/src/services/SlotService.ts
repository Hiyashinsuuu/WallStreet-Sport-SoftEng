import { AppDataSource } from '../ormconfig';
import { Slot } from '../entities/Slot';
import { Between } from 'typeorm';


export class SlotService {
repo = AppDataSource.getRepository(Slot);


async createSlot(start: Date, end: Date) {
const slot = this.repo.create({ start, end, available: true });
return this.repo.save(slot);
}


async findOverlapping(start: Date, end: Date) {
// overlap if NOT (existing.end <= start OR existing.start >= end)
return this.repo
.createQueryBuilder('slot')
.where('slot.start < :end AND slot.end > :start', { start, end })
.getMany();
}


async isAvailable(start: Date, end: Date) {
const overlapping = await this.findOverlapping(start, end);
return overlapping.length === 0;
}
}