import { join } from 'path';

import { Module } from '@nestjs/common';
import { ClientProxyFactory, Transport, ClientGrpcProxy } from '@nestjs/microservices';

import { CPublisherResolver } from './publisher.resolver';

@Module({
  providers: [
    CPublisherResolver,
    {
      provide: 'PublishersServiceClient',
      useFactory: (): ClientGrpcProxy => {
        return ClientProxyFactory.create({
          transport: Transport.GRPC,
          options: {
            url: `localhost:3002`,
            package: 'publishers',
            protoPath: join(process.cwd(), 'apps/library-service/src/modules/publisher/publisher.proto'),
          },
        });
      },
    },
  ],
  exports: ['PublishersServiceClient'],
})
export class CPublisherModule {}
