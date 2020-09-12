import { ObjectType, Field } from 'type-graphql';

import { User } from '../../../entities/user.entity';

@ObjectType()
export class LoginUser {
  @Field(() => User)
  user: User;

  @Field(() => String)
  token: string;
}