import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { CAppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(CAppModule);

  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000, () => console.log('Library-service is listening...'));
}
bootstrap();
