import { Resolver, Mutation, Arg, Ctx } from 'type-graphql';

import { googleLogin } from '../config/google';
import { generateToken } from '../config/jwt';

import { Context } from '../types/context.interface';

import { User } from '../../entities/user.entity';
import { LoginUser } from './entities/login.entity';

import { GoogleLoginInput } from './dto/google-login.input';

import { GoogleError } from '../errors/google.error';


@Resolver(() => User)
export class LoginResolver {
  @Mutation(() => LoginUser)
  async loginWithGoogle(
    @Ctx() ctx: Context,
    @Arg('input', { nullable: false }) input: GoogleLoginInput
  ): Promise<LoginUser> {
    const verify = await googleLogin(input.token);
    if (!verify) {
      throw new GoogleError('Could not Login with Google');
    }
    let user = await User.findOne({ where: { email: verify.email } });
    if(!user) {
      user = new User();
      user.firstName = verify.given_name;
      user.lastName = verify.family_name;
      user.email = verify.email;
      user.imageURL = verify.picture;
      user.password = null;
      user.save();
    }
    ctx.res.cookie('r', generateToken(user.id, 'refresh'), {
      maxAge: Date.now() + 1000 * 60 * 60 * 24,
      httpOnly: true,
    });
    return {
      user,
      token: generateToken(user.id, 'access'),
    };
  }
}