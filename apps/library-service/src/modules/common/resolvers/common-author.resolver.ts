import { Inject, OnModuleInit } from '@nestjs/common';
import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { ClientGrpcProxy } from '@nestjs/microservices';
import { Author } from 'apps/library-service/src/graphql';
import { lastValueFrom } from 'rxjs';

import { IBookService } from '../../book/book.interface';

@Resolver('Author')
export class CCommonAuthorResolver implements OnModuleInit {
  constructor(
    @Inject('BooksServiceClient')
    private readonly bookClient: ClientGrpcProxy
  ) {}

  private bookService: IBookService;

  onModuleInit(): void {
    this.bookService = this.bookClient.getService<IBookService>('CBooksServiceService');
  }

  @ResolveField('books')
  async getBooks(@Parent() author: Author) {
    return (await lastValueFrom(this.bookService.findByAuthorId({ id: author.id }))).books;
  }
}
