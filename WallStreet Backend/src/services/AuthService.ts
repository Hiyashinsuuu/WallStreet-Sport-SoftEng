import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { AppDataSource } from '../ormconfig';
import { User } from '../entities/User';

export class AuthService {
  private userRepo = AppDataSource.getRepository(User);

  async login(username: string, password: string) {
    const user = await this.userRepo.findOne({ where: { username } });
    
    if (!user) {
      throw { status: 401, message: 'Invalid credentials' };
    }

    const isValid = await bcrypt.compare(password, user.passwordHash);
    
    if (!isValid) {
      throw { status: 401, message: 'Invalid credentials' };
    }

    const token = jwt.sign(
      { sub: user.id, username: user.username, role: user.role },
      process.env.JWT_SECRET || 'your-secret-key',
      { expiresIn: '24h' }
    );

    return {
      token,
      user: {
        id: user.id,
        username: user.username,
        role: user.role
      }
    };
  }

  async createAdmin(username: string, password: string) {
    const existing = await this.userRepo.findOne({ where: { username } });
    
    if (existing) {
      throw { status: 409, message: 'Username already exists' };
    }

    const passwordHash = await bcrypt.hash(password, 10);
    
    const user = this.userRepo.create({
      username,
      passwordHash,
      role: 'admin'
    });

    await this.userRepo.save(user);
    
    return { success: true, userId: user.id };
  }
}