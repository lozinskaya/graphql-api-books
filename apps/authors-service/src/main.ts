import { NestFactory } from '@nestjs/core';
import { AuthorsServiceModule } from './authors-service.module';

async function bootstrap() {
  const app = await NestFactory.create(AuthorsServiceModule);
  await app.listen(3000);
}
bootstrap();
