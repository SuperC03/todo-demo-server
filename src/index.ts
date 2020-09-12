import 'reflect-metadata';

import express from 'express';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import { buildSchema } from 'type-graphql';
import { ApolloServer } from 'apollo-server-express';

import { env } from './modules/config/env';
import { initDB } from './modules/config/db';

import { Context } from './modules/types/context.interface';

const bootstrap = async (): Promise<void> => {
  // Init Database
  await initDB();
  // Build Schema
  const schema = await buildSchema({
    resolvers: [
      __dirname + '/**/*.resolver.{js,ts}'
    ],
  });
  // Init Apollo Server
  const server = new ApolloServer({
    schema,
    context: ({ req, res }): Context => {
      return { req, res, user: null };
    },
    engine: {    
      reportSchema: true,
      graphVariant: 'current'
    }
  });
  // Init Express App
  const app = express();
  // Add Cookie Parsing
  app.use(cookieParser());
  app.use(bodyParser.json());
  // Apply GraphQL Server
  server.applyMiddleware({ app });
  // Set PORT Variable
  const PORT: number = env.SERVER_PORT | 8080;
  // Start Server
  app.listen(PORT, () => {
    console.log('App Listening on Port %d', PORT);
  });
}

bootstrap();