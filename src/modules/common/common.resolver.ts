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
  findAuthor(@Args('id') id: number) {
    return this.commonService.findAuthor(id);
  }

  @Query('publishers')
  findPublishers() {
    return this.commonService.findPublishers();
  }

  @Query('publisher')
  findPublisher(@Args('id') id: number) {
    return this.commonService.findPublisher(id);
  }
}
