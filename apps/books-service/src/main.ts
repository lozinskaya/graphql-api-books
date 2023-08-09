import { NestFactory } from '@nestjs/core';

import { CBooksServiceModule } from './books-service.module';

async function bootstrap() {
  const app = await NestFactory.create(CBooksServiceModule);

  await app.listen(3000);
}
bootstrap();
