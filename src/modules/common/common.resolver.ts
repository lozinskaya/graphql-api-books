import { Query, Resolver, Args } from '@nestjs/graphql';

import { CCommonService } from './common.service';

@Resolver('Common')
export class CCommonResolver {
  constructor(private readonly commonService: CCommonService) {}

  @Query('books')
  findBooks() {
    return this.commonService.findBooks();
  }

  @Query('authors')
  findAuthors() {
    return this.commonService.findAuthors();
  }

  @Query('author')
  findOne(@Args('id') id: number) {
    return this.commonService.findAuthor(id);
  }

  @Query('publishers')
  findAll() {
    return this.commonService.findPublishers();
  }
}
