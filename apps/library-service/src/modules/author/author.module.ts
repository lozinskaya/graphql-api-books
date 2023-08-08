import { join } from 'path';

import { Module } from '@nestjs/common';
import { ClientProxyFactory, Transport, ClientGrpcProxy } from '@nestjs/microservices';

import { CAuthorResolver } from './author.resolver';
import { CAuthorService } from './author.service';

@Module({
  providers: [
    CAuthorResolver,
    CAuthorService,
    {
      provide: 'AuthorsServiceClient',
      useFactory: (): ClientGrpcProxy => {
        return ClientProxyFactory.create({
          transport: Transport.GRPC,
          options: {
            url: `localhost:3001`,
            package: 'authors',
            protoPath: join(process.cwd(), 'apps/library-service/src/modules/author/author.proto'),
          },
        });
      },
    },
  ],
  imports: [],
  exports: [CAuthorService],
})
export class CAuthorModule {}
