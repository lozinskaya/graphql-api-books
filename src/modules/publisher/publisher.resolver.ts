import { Resolver, Mutation, Args } from '@nestjs/graphql';

import { CCreatePublisherInput } from './dto/create-publisher.input';
import { CPublisherService } from './publisher.service';

@Resolver('Publisher')
export class CPublisherResolver {
  constructor(private readonly publisherService: CPublisherService) {}

  @Mutation('createPublisher')
  createPublisher(@Args('createPublisherInput') createPublisherInput: CCreatePublisherInput) {
    return this.publisherService.create(createPublisherInput);
  }
}
