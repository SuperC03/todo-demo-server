import { Resolver, Ctx, Query, UseMiddleware } from 'type-graphql';

import { User } from '../../entities/user.entity';

import { Context } from '../types/context.interface';

import { SignedInInterceptor } from '../middleware/signed_in.middleware';

@Resolver(() => User)
export class MeResolver {
  @UseMiddleware(SignedInInterceptor)
  @Query(() => User)
  me(@Ctx() { user }: Context): User {
    return user;
  }
}