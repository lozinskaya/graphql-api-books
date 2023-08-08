import { Inject, OnModuleInit } from '@nestjs/common';
import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { ClientGrpcProxy } from '@nestjs/microservices';
import { CreateAuthorInput } from 'apps/library-service/src/graphql';
import { lastValueFrom } from 'rxjs';

import { IAuthorsService } from './authors.interface';

@Resolver('Author')
export class CAuthorResolver implements OnModuleInit {
  constructor(
    @Inject('AuthorsServiceClient')
    private readonly authorsClient: ClientGrpcProxy
  ) {}

  private authorService: IAuthorsService;

  onModuleInit(): void {
    this.authorService = this.authorsClient.getService<IAuthorsService>('CAuthorsServiceService');
  }

  @Mutation('createAuthor')
  createAuthor(@Args('createAuthorInput') createAuthorInput: CreateAuthorInput) {
    return this.authorService.create({ createAuthorInput });
  }

  @Query('authors')
  async findAll() {
    return (await lastValueFrom(this.authorService.findAll({ data: null }))).authors;
  }

  @Query('author')
  async findOne(@Args('id') id: number) {
    try {
      const author = await lastValueFrom(this.authorService.findOne({ id }));

      return author;
    } catch (error) {
      throw new Error('Автор с id = ' + id + ' не найдена');
    }
  }
}
