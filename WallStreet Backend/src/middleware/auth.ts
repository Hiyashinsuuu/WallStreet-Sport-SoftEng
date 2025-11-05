import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { AppDataSource } from '../ormconfig';
import { User } from '../entities/User';

export interface AuthRequest extends Request { 
  user?: { 
    id: string; 
    username: string; 
    role: string; 
  } 
}

export async function authMiddleware(req: AuthRequest, res: Response, next: NextFunction) {
  try {
    const header = req.headers.authorization;
    
    if (!header) {
      return res.status(401).json({ error: 'Missing authorization header' });
    }

    const token = header.replace('Bearer ', '');
    
    const payload: any = jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key');
    
    const repo = AppDataSource.getRepository(User);
    const user = await repo.findOne({ where: { id: payload.sub } });
    
    if (!user) {
      return res.status(401).json({ error: 'User not found' });
    }

    req.user = { 
      id: user.id, 
      username: user.username, 
      role: user.role 
    };
    
    next();
  } catch (e: any) {
    return res.status(401).json({ error: 'Invalid or expired token' });
  }
}

export function adminOnly(req: AuthRequest, res: Response, next: NextFunction) {
  if (req.user?.role !== 'admin') {
    return res.status(403).json({ error: 'Admin access required' });
  }
  next();
}