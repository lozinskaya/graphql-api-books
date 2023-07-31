import { Query, Resolver } from '@nestjs/graphql';

import { CBookService } from './book.service';

@Resolver('Book')
export class CBookResolver {
  constructor(private readonly bookService: CBookService) {}

  @Query('books')
  findAll() {
    return this.bookService.findAll();
  }
}
