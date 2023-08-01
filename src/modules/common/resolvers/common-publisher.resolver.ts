import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { CBookService } from 'src/modules/book/book.service';
import { CPublisherService } from 'src/modules/publisher/publisher.service';

import { CCommonService } from '../common.service';

@Resolver('Publisher')
export class CCommonPublisherResolver {
  constructor(
    private readonly bookService: CBookService,
    private readonly publisherService: CPublisherService,
    private readonly commonService: CCommonService
  ) {}

  @Query('publishers')
  findPublishers() {
    return this.publisherService.findAll();
  }

  @Query('publisher')
  findPublisher(@Args('id') id: number) {
    return this.publisherService.findOne(id);
  }

  @ResolveField('books')
  getBooks(@Parent() publisher) {
    return this.bookService.findByPublisherId(publisher.id);
  }

  @ResolveField('authors')
  getAuthors(@Parent() publisher) {
    const books = this.bookService.findByPublisherId(publisher.id);

    return this.commonService.findPublisherAuthors(books);
  }
}
