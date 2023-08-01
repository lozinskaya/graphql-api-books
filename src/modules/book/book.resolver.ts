import { Args, Query, Resolver } from '@nestjs/graphql';

import { CBookService } from './book.service';

@Resolver('Book')
export class CBookResolver {
  constructor(private readonly bookService: CBookService) {}

  @Query('book')
  findOne(@Args('id') id: number) {
    return this.bookService.findOne(id);
  }

  @Query('books')
  findAll() {
    return this.bookService.findAll();
  }
}
