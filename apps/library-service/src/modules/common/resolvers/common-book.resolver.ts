import { Inject, OnModuleInit } from '@nestjs/common';
import { Args, Mutation, Parent, ResolveField, Resolver, Subscription } from '@nestjs/graphql';
import { ClientGrpcProxy } from '@nestjs/microservices';
import { CreateBookInput } from 'apps/library-service/src/graphql';
import { IAuthorsService } from 'apps/library-service/src/modules/author/authors.interface';
import { CCreateBookInput } from 'apps/library-service/src/modules/book/dto/create-book.input';
import { PubSub } from 'graphql-subscriptions';
import { lastValueFrom } from 'rxjs';

import { IPublisherService } from '../../publisher/publisher.interface';
import { CCommonService } from '../common.service';

const pubSub = new PubSub();

enum SUBSCRIPTIONS_EVENTS {
  bookAdded = 'bookAdded',
}

@Resolver('Book')
export class CCommonBookResolver implements OnModuleInit {
  constructor(
    private readonly commonService: CCommonService,
    @Inject('AuthorsServiceClient')
    private readonly authorsClient: ClientGrpcProxy,
    @Inject('PublishersServiceClient')
    private readonly publisherClient: ClientGrpcProxy
  ) {}

  private authorService: IAuthorsService;
  private publisherService: IPublisherService;

  onModuleInit(): void {
    this.authorService = this.authorsClient.getService<IAuthorsService>('CAuthorsServiceService');
    this.publisherService = this.publisherClient.getService<IPublisherService>('CPublishersServiceService');
  }

  @ResolveField('publisher')
  getPublisher(@Parent() book: CreateBookInput) {
    return this.publisherService.findOne({ id: book.publisherId });
  }

  @ResolveField('authors')
  async getAuthors(@Parent() book: CreateBookInput) {
    return book.authorsIds.map(async (authorId) => await lastValueFrom(this.authorService.findOne({ id: authorId })));
  }

  @Mutation('createBook')
  async createBook(@Args('createBookInput') createBookInput: CCreateBookInput) {
    const bookAdded = await lastValueFrom(await this.commonService.createBook(createBookInput));

    pubSub.publish(SUBSCRIPTIONS_EVENTS.bookAdded, { bookAdded: bookAdded });

    return bookAdded;
  }

  @Subscription(SUBSCRIPTIONS_EVENTS.bookAdded)
  bookAdded() {
    return pubSub.asyncIterator(SUBSCRIPTIONS_EVENTS.bookAdded);
  }
}
