import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { CBookService } from 'src/modules/book/book.service';

@Resolver('Author')
export class CCommonAuthorResolver {
  constructor(private readonly bookService: CBookService) {}

  @ResolveField('books')
  getBooks(@Parent() author) {
    return this.bookService.findByAuthorId(author.id);
  }
}
