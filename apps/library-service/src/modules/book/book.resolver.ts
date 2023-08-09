import { Inject, OnModuleInit } from '@nestjs/common';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { ClientGrpcProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';

import { IBookService } from './book.interface';

@Resolver('Book')
export class CBookResolver implements OnModuleInit {
  constructor(
    @Inject('BooksServiceClient')
    private readonly bookClient: ClientGrpcProxy
  ) {}

  private bookService: IBookService;

  onModuleInit(): void {
    this.bookService = this.bookClient.getService<IBookService>('CBooksServiceService');
  }

  @Query('book')
  async findOne(@Args('id') id: number) {
    try {
      const book = await lastValueFrom(this.bookService.findOne({ id }));

      return book;
    } catch (error) {
      throw new Error('Книга с id = ' + id + ' не найдена');
    }
  }

  @Query('books')
  async findAll() {
    return (await lastValueFrom(this.bookService.findAll({ data: null }))).books;
  }
}
