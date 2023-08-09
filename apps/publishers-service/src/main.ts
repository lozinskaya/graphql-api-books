import { join } from 'path';

import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices/enums';

import { CPublishersServiceModule } from './publishers-service.module';

const microserviceOptions = {
  transport: Transport.GRPC,
  options: {
    url: `0.0.0.0:3002`,
    package: 'publishers',
    protoPath: join(process.cwd(), 'apps/publishers-service/src/publishers-service.proto'),
  },
};

async function bootstrap() {
  const app = await NestFactory.createMicroservice(CPublishersServiceModule, microserviceOptions);

  await app.listen().then(() => console.log('Publishers service is listening...'));
}
bootstrap();
