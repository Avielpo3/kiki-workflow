/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';
import { LoggerMiddleware } from "./app/middlewares/logger.middleware";
import { NextFunction } from "express";

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {cors: true});
  app.use(function logger(req: Request, res: Response, next: NextFunction) {
    console.log(req.url, req.mode);
    next();
  })
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  const port = process.env.PORT || 3333;
  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();
