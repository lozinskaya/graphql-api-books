import { Inject, OnModuleInit } from '@nestjs/common';
import { Args, Mutation, Parent, ResolveField, Resolver, Subscription } from '@nestjs/graphql';
import { ClientGrpcProxy } from '@nestjs/microservices';
import { CreateBookInput } from 'apps/library-service/src/graphql';
import { IAuthorsService } from 'apps/library-service/src/modules/author/authors.interface';
import { CCreateBookInput } from 'apps/library-service/src/modules/book/dto/create-book.input';
import { CPublisherService } from 'apps/library-service/src/modules/publisher/publisher.service';
import { PubSub } from 'graphql-subscriptions';
import { lastValueFrom } from 'rxjs';

import { CCommonService } from '../common.service';

const pubSub = new PubSub();

enum SUBSCRIPTIONS_EVENTS {
  bookAdded = 'bookAdded',
}
@Resolver('Book')
export class CCommonBookResolver implements OnModuleInit {
  constructor(
    private readonly publisherService: CPublisherService,
    private readonly commonService: CCommonService,
    @Inject('AuthorsServiceClient')
    private readonly authorsClient: ClientGrpcProxy
  ) {}

  private authorService: IAuthorsService;

  onModuleInit(): void {
    this.authorService = this.authorsClient.getService<IAuthorsService>('CAuthorsServiceService');
  }

  @ResolveField('publisher')
  getPublisher(@Parent() book: CreateBookInput) {
    return this.publisherService.findOne(book.publisherId);
  }

  @ResolveField('authors')
  async getAuthors(@Parent() book: CreateBookInput) {
    return book.authorsIds.map(async (authorId) => await lastValueFrom(this.authorService.findOne({ id: authorId })));
  }

  @Mutation('createBook')
  createBook(@Args('createBookInput') createBookInput: CCreateBookInput) {
    const bookAdded = this.commonService.createBook(createBookInput);

    pubSub.publish(SUBSCRIPTIONS_EVENTS.bookAdded, { bookAdded: bookAdded });

    return bookAdded;
  }

  @Subscription('bookAdded')
  catCreated() {
    return pubSub.asyncIterator('bookAdded');
  }
}
