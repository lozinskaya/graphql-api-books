import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { CAuthorService } from 'src/modules/author/author.service';
import { CPublisherService } from 'src/modules/publisher/publisher.service';

import { CBookService } from './book.service';

@Resolver('Book')
export class CBookResolver {
  constructor(
    private readonly bookService: CBookService,
    private readonly authorService: CAuthorService,
    private readonly publisherService: CPublisherService
  ) {}

  @Query('book')
  findBook(@Args('id') id: number) {
    return this.bookService.findOne(id);
  }

  @ResolveField('publisher')
  getPublisher(@Parent() book) {
    return this.publisherService.findOne(book.publisherId);
  }

  @ResolveField('authors')
  getAuthors(@Parent() book) {
    return book.authorsIds.map((authorId) => this.authorService.findOne(authorId));
  }
}
