import { ApolloFederationDriver, ApolloFederationDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { CAuthorModule } from 'src/modules/author';

import { CBookResolver } from './book.resolver';
import { CBookService } from './book.service';

@Module({
  providers: [CBookResolver, CBookService],
  imports: [
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      typePaths: ['**/*.graphql'],
    }),
    CAuthorModule,
  ],
})
export class CBookModule {}
