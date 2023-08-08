import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { Author } from 'apps/library-service/src/graphql';
import { CBookService } from 'apps/library-service/src/modules/book/book.service';

@Resolver('Author')
export class CCommonAuthorResolver {
  constructor(private readonly bookService: CBookService) {}

  @ResolveField('books')
  getBooks(@Parent() author: Author) {
    return this.bookService.findByAuthorId(author.id);
  }
}
