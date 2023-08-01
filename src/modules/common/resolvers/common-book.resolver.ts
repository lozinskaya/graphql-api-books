import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { CAuthorService } from 'src/modules/author/author.service';
import { CBookService } from 'src/modules/book/book.service';
import { CCreateBookInput } from 'src/modules/book/dto/create-book.input';
import { CPublisherService } from 'src/modules/publisher/publisher.service';

import { CCommonService } from '../common.service';

@Resolver('Book')
export class CCommonBookResolver {
  constructor(
    private readonly bookService: CBookService,
    private readonly authorService: CAuthorService,
    private readonly publisherService: CPublisherService,
    private readonly commonService: CCommonService
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

  @Mutation('createBook')
  createBook(@Args('createBookInput') createBookInput: CCreateBookInput) {
    return this.commonService.createBook(createBookInput);
  }
}
