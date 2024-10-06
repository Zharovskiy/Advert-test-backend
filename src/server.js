import express from 'express';
import pino from 'pino-http';
import cors from 'cors';
import { env } from './utils/env.js';
import rootRouter from './routers/index.js';
import { notFoundHandler } from './middlewares/notFoundHandler.js';
import { errorHandler } from './middlewares/errorHandler.js';
import cookieParser from 'cookie-parser';

export const setupServer = () => {
  const app = express();

  app.use(cookieParser());

  app.use(
    express.json({
      type: ['application/json', 'application/vnd.api+json'],
      limit: '100kb',
    }),
  );

  const allowedOrigins = [
    'http://localhost:3000',
    'https://advert-test.vercel.app',
  ];

  app.use(
    cors({
      origin: (origin, callback) => {
        if (!origin || allowedOrigins.includes(origin)) {
          callback(null, true);
        } else {
          callback(new Error('Not allowed by CORS'));
        }
      },
      optionsSuccessStatus: 200,
      credentials: true,
    }),
  );

  app.use(
    pino({
      transport: {
        target: 'pino-pretty',
      },
    }),
  );

  app.use(rootRouter);

  app.use('*', notFoundHandler);

  app.use(errorHandler);

  const PORT = Number(env('PORT', '3000'));

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};
