import { plainToClass } from 'class-transformer';
import { User } from '../entities/User';


export function serializeUser(user: User) {
// remove sensitive fields
const out = {
id: user.id,
email: user.email,
name: user.name,
role: user.role,
};
return out;
}


// FILE: src/utils/validator.ts
import Joi from 'joi';


export const signupSchema = Joi.object({
email: Joi.string().email().required(),
password: Joi.string().min(6).required(),
name: Joi.string().optional(),
});


export const bookingCreateSchema = Joi.object({
slotId: Joi.string().guid({ version: ['uuidv4', 'uuidv5'] }).required(),
notes: Joi.string().allow('', null),
});