import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { AppDataSource } from '../ormconfig';
import { User } from '../entities/User';


export interface AuthRequest extends Request { user?: Partial<User> }


export async function authMiddleware(req: AuthRequest, res: Response, next: NextFunction) {
const header = req.headers.authorization;
if (!header) return res.status(401).json({ error: 'Missing authorization header' });
const token = header.replace('Bearer ', '');
try {
const payload: any = jwt.verify(token, process.env.JWT_SECRET || 'secret');
const repo = AppDataSource.getRepository(User);
const user = await repo.findOneBy({ id: payload.sub });
if (!user) return res.status(401).json({ error: 'User not found' });
req.user = { id: user.id, email: user.email, role: user.role };
next();
} catch (e) {
return res.status(401).json({ error: 'Invalid token' });
}
}


export function adminOnly(req: AuthRequest, res: Response, next: NextFunction) {
if (req.user?.role !== 'admin') return res.status(403).json({ error: 'Forbidden' });
next();
}