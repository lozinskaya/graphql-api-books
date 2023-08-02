import { Args, Mutation, Parent, ResolveField, Resolver, Subscription } from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';
import { CreateBookInput } from 'src/graphql';
import { CAuthorService } from 'src/modules/author/author.service';
import { CCreateBookInput } from 'src/modules/book/dto/create-book.input';
import { CPublisherService } from 'src/modules/publisher/publisher.service';

import { CCommonService } from '../common.service';

const pubSub = new PubSub();

enum SUBSCRIPTIONS_EVENTS {
  bookAdded = 'bookAdded',
}
@Resolver('Book')
export class CCommonBookResolver {
  constructor(
    private readonly authorService: CAuthorService,
    private readonly publisherService: CPublisherService,
    private readonly commonService: CCommonService
  ) {}

  @ResolveField('publisher')
  getPublisher(@Parent() book: CreateBookInput) {
    return this.publisherService.findOne(book.publisherId);
  }

  @ResolveField('authors')
  getAuthors(@Parent() book: CreateBookInput) {
    return book.authorsIds.map((authorId) => this.authorService.findOne(authorId));
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
