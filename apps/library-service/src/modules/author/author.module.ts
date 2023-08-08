import { join } from 'path';

import { Module } from '@nestjs/common';
import { ClientProxyFactory, Transport, ClientGrpcProxy } from '@nestjs/microservices';

import { CAuthorResolver } from './author.resolver';

@Module({
  providers: [
    CAuthorResolver,
    {
      provide: 'AuthorsServiceClient',
      useFactory: (): ClientGrpcProxy => {
        return ClientProxyFactory.create({
          transport: Transport.GRPC,
          options: {
            url: `authors:3001`,
            package: 'authors',
            protoPath: join(process.cwd(), 'apps/library-service/src/modules/author/author.proto'),
          },
        });
      },
    },
  ],
  imports: [],
  exports: ['AuthorsServiceClient'],
})
export class CAuthorModule {}
