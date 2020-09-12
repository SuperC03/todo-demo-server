import { ApolloError } from 'apollo-server-express';

export class GoogleError extends ApolloError {
  constructor(msg: string) {
    super(msg, 'GOOGLE_ERROR');
  }
}