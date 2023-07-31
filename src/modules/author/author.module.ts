import { ApolloFederationDriver, ApolloFederationDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

import { CAuthorResolver } from './author.resolver';
import { CAuthorService } from './author.service';

@Module({
  providers: [CAuthorResolver, CAuthorService],
  imports: [
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      typePaths: ['**/*.graphql'],
    }),
  ],
  exports: [CAuthorService],
})
export class CAuthorModule {}
