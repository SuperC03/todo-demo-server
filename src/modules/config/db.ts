import { createConnection, Connection } from 'typeorm';
import { env } from './env';

export const initDB = async (): Promise<Connection> => {
  const connection = await createConnection({
    name: 'default',
    type: 'postgres',
    host: env.DATABASE_HOST,
    port: env.DATABASE_PORT,
    username: env.DATABASE_USERNAME,
    password: env.DATABASE_PASSWORD,
    database: env.DATABASE_NAME,
    entities: [__dirname + '/../../entities/*.entity.{js,ts}'],
    logging: true,
    synchronize: !env.isProd,
  });
  if (!connection) {
    throw new Error('Could not Connect to Dabase');
  }
  return connection;
}