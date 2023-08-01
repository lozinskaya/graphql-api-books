import { Query, Resolver, Args, Mutation } from '@nestjs/graphql';
import { CCreateBookInput } from 'src/modules/book/dto/create-book.input';

import { CCommonService } from './common.service';

@Resolver('Common')
export class CCommonResolver {
  constructor(private readonly commonService: CCommonService) {}

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
