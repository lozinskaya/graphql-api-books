import { Resolver, Query } from '@nestjs/graphql';

import { CPublisherService } from './publisher.service';

@Resolver('Publisher')
export class CPublisherResolver {
  constructor(private readonly publisherService: CPublisherService) {}

  @Query('publishers')
  findAll() {
    return this.publisherService.findAll();
  }
}
