import { join } from 'path';

import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices/enums';

import { CBooksServiceModule } from './books-service.module';
const microserviceOptions = {
  transport: Transport.GRPC,
  options: {
    url: `0.0.0.0:3003`,
    package: 'books',
    protoPath: join(process.cwd(), 'apps/books-service/src/books-service.proto'),
  },
};

async function bootstrap() {
  const app = await NestFactory.createMicroservice(CBooksServiceModule, microserviceOptions);

  await app.listen().then(() => console.log('Books service is listening...'));
}
bootstrap();
