import { join } from 'path';

import { Module } from '@nestjs/common';
import { ClientGrpcProxy, ClientProxyFactory, Transport } from '@nestjs/microservices';

import { CBookResolver } from './book.resolver';

@Module({
  providers: [
    CBookResolver,
    {
      provide: 'BooksServiceClient',
      useFactory: (): ClientGrpcProxy => {
        return ClientProxyFactory.create({
          transport: Transport.GRPC,
          options: {
            url: `books:3003`,
            package: 'books',
            protoPath: join(process.cwd(), 'apps/library-service/src/modules/book/book.proto'),
          },
        });
      },
    },
  ],
  imports: [],
  exports: ['BooksServiceClient'],
})
export class CBookModule {}
