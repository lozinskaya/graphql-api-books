import { Resolver, Query, Args } from '@nestjs/graphql';

import { CPublisherService } from './publisher.service';

@Resolver('Publisher')
export class CPublisherResolver {
  constructor(private readonly publisherService: CPublisherService) {}

  @Query('publishers')
  findAll() {
    return this.publisherService.findAll();
  }

  @Query('publisher')
  findOne(@Args('id') id: number) {
    return this.publisherService.findOne(id);
  }
}
