import { NestFactory } from '@nestjs/core';

import { CPublishersServiceModule } from './publishers-service.module';

async function bootstrap() {
  const app = await NestFactory.create(CPublishersServiceModule);

  await app.listen(3000);
}
bootstrap();
