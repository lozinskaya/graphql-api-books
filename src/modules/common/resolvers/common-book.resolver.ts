import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { CAuthorService } from 'src/modules/author/author.service';
import { CBookService } from 'src/modules/book/book.service';
import { CPublisherService } from 'src/modules/publisher/publisher.service';

@Resolver('Book')
export class CCommonBookResolver {
  constructor(
    private readonly bookService: CBookService,
    private readonly authorService: CAuthorService,
    private readonly publisherService: CPublisherService
  ) {}

  @Query('books')
  findBooks() {
    return this.bookService.findAll();
  }

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
