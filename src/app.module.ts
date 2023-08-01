import { join } from 'path';

import { ApolloFederationDriver, ApolloFederationDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

import { modules } from './modules';
@Module({
  imports: [
    ...modules,
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      typePaths: ['**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
        outputAs: 'class',
        skipResolverArgs: true,
      },
    }),
  ],
  controllers: [],
  providers: [],
})
export class CAppModule {}
