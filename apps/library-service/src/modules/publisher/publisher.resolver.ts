import { Inject, OnModuleInit } from '@nestjs/common';
import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { ClientGrpcProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';

import { CCreatePublisherInput } from './dto/create-publisher.input';
import { IPublisherService } from './publisher.interface';

@Resolver('Publisher')
export class CPublisherResolver implements OnModuleInit {
  constructor(
    @Inject('PublishersServiceClient')
    private readonly publisherClient: ClientGrpcProxy
  ) {}

  private publisherService: IPublisherService;

  onModuleInit(): void {
    this.publisherService = this.publisherClient.getService<IPublisherService>('CPublishersServiceService');
  }

  @Mutation('createPublisher')
  createPublisher(@Args('createPublisherInput') createPublisherInput: CCreatePublisherInput) {
    return this.publisherService.create({ createPublisherInput });
  }

  @Query('publishers')
  async findPublishers() {
    return (await lastValueFrom(this.publisherService.findAll({ data: null }))).publishers;
  }

  @Query('publisher')
  async findPublisher(@Args('id') id: number) {
    try {
      const publisher = await lastValueFrom(this.publisherService.findOne({ id }));

      return publisher;
    } catch (error) {
      throw new Error('Издателя с id = ' + id + ' не найдена');
    }
  }
}
