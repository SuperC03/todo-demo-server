import { Request, Response } from 'express';
import { User } from '../../entities/user.entity';

export interface Context {
  req: Request;
  res: Response;
  user: User;
}