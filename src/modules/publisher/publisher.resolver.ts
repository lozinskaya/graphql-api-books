import { Resolver, Query, Args } from '@nestjs/graphql';

import { CPublisherService } from './publisher.service';

@Resolver('Publisher')
export class CPublisherResolver {
  constructor(private readonly publisherService: CPublisherService) {}
}
