import './globals';
import { config } from 'dotenv';
config();
import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3131);
}
bootstrap();
