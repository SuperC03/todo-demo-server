import { MiddlewareFn } from 'type-graphql';
import { AuthenticationError } from 'apollo-server-express';

import { User } from '../../entities/user.entity';

import { Context } from '../types/context.interface';

import { verifyToken } from '../config/jwt';

export const SignedInInterceptor: MiddlewareFn<Context> = async ({ context }, next) => {
  const token = context.req.headers.authorization;
  if(!token) {
    throw new AuthenticationError('Must Provide Access Token');
  }
  const id = verifyToken(token, 'access');
  if(!id) {
    throw new AuthenticationError('Invalid Access Token');
  }
  const user = await User.findOne(id);
  if(!user) {
    throw new AuthenticationError('User not Found');
  }
  context.user = user;
  return next();
}