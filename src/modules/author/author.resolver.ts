import { Resolver, Query } from '@nestjs/graphql';

import { CAuthorService } from './author.service';

@Resolver('Author')
export class CAuthorResolver {
  constructor(private readonly authorService: CAuthorService) {}

  @Query('authors')
  findAll() {
    return this.authorService.findAll();
  }
}
