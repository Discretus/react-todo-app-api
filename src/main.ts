import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from 'dotenv';

async function bootstrap() {
  config();
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT);
  Logger.log(`Server started at port ${process.env.PORT}`, 'bootstrap');
}

bootstrap();
