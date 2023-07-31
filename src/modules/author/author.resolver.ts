import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';

import { CAuthorService } from './author.service';
import { CCreateAuthorInput } from './dto/create-author.input';

@Resolver('Author')
export class CAuthorResolver {
  constructor(private readonly authorService: CAuthorService) {}

  @Mutation('createAuthor')
  createAuthor(@Args('createAuthorInput') createAuthorInput: CCreateAuthorInput) {
    return this.authorService.create(createAuthorInput);
  }

  @Query('author')
  findOne(@Args('id') id: number) {
    return this.authorService.findOne(id);
  }
}
