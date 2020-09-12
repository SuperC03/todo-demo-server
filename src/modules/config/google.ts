import { OAuth2Client, TokenPayload } from 'google-auth-library';

import { GoogleError } from '../errors/google.error';

import { env } from './env';

export const googleLogin = async (token: string): Promise<TokenPayload> => {
  const client = new OAuth2Client(env.GOOGLE_CLIENT);
  try {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: env.GOOGLE_CLIENT,
    });
    console.log(ticket)
    return ticket.getPayload();
  } catch {
    throw new GoogleError('Could not Login with Google');
  }
}