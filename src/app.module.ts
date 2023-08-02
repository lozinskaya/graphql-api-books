import { join } from 'path';

import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

import { modules } from './modules';
@Module({
  imports: [
    ...modules,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
        outputAs: 'class',
        skipResolverArgs: true,
      },
      installSubscriptionHandlers: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class CAppModule {}
