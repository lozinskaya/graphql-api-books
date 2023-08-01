import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { CAuthorService } from 'src/modules/author/author.service';
import { CBookService } from 'src/modules/book/book.service';

@Resolver('Author')
export class CCommonAuthorResolver {
  constructor(private readonly bookService: CBookService, private readonly authorService: CAuthorService) {}

  @Query('authors')
  findAuthors() {
    return this.authorService.findAll();
  }

  @Query('author')
  findAuthor(@Args('id') id: number) {
    return this.authorService.findOne(id);
  }

  @ResolveField('books')
  getPublisher(@Parent() author) {
    return this.bookService.findByAuthorId(author.id);
  }
}
