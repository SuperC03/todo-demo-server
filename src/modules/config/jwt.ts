import jwt from 'jsonwebtoken';
import { AuthenticationError } from 'apollo-server-express';

import { env } from './env';

export const generateToken = (id: string, type: 'refresh' | 'access'): string => {
  return jwt.sign({
    sub: id,
  }, type == 'access' ? env.ACCESS_TOKEN_SECRET : env.REFRESH_TOKEN_SECRET, {
    expiresIn: type == 'access' ? 60 * 15 : 60 * 60 * 24,
  });
};

export const verifyToken = (token: string, type: 'refresh' | 'access') => {
  try {
    const decoded = jwt.verify(token, type == 'access' ? env.ACCESS_TOKEN_SECRET : env.REFRESH_TOKEN_SECRET);
    return (decoded as any)['sub'];
  } catch {
    throw new AuthenticationError('Access Token Invalid or Expired');
  }
}