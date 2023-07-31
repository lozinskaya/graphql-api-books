import { NestFactory } from '@nestjs/core';

import { CAppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(CAppModule);

  await app.listen(3000);
}
bootstrap();
