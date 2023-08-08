import { join } from 'path';

import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices/enums';

import { CAuthorsServiceModule } from './authors-service.module';
const microserviceOptions = {
  transport: Transport.GRPC,
  options: {
    url: `0.0.0.0:3001`,
    package: 'authors',
    protoPath: join(process.cwd(), 'apps/authors-service/src/authors-service.proto'),
  },
};

async function bootstrap() {
  const app = await NestFactory.createMicroservice(CAuthorsServiceModule, microserviceOptions);

  await app.listen().then(() => console.log('Authors service is listening...'));
}
bootstrap();
