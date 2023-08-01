import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { CBookService } from 'src/modules/book/book.service';

import { CCommonService } from '../common.service';

@Resolver('Publisher')
export class CCommonPublisherResolver {
  constructor(private readonly bookService: CBookService, private readonly commonService: CCommonService) {}

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
