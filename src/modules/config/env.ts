import { cleanEnv, str, port } from 'envalid';

export const env = cleanEnv(process.env, {
  // Database
  DATABASE_HOST: str(),
  DATABASE_PORT: port(),
  DATABASE_USERNAME: str(),
  DATABASE_PASSWORD: str(),
  DATABASE_NAME: str(),
  // Google
  GOOGLE_CLIENT: str(),
  // JWT
  ACCESS_TOKEN_SECRET: str(),
  REFRESH_TOKEN_SECRET: str(),
  // Other
  SERVER_PORT: port(),
});