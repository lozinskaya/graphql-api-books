import { Inject } from '@nestjs/common';
import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { ClientGrpcProxy } from '@nestjs/microservices';
import { Publisher } from 'apps/library-service/src/graphql';
import { lastValueFrom } from 'rxjs';

import { IBookService } from '../../book/book.interface';
import { CCommonService } from '../common.service';

@Resolver('Publisher')
export class CCommonPublisherResolver {
  constructor(
    @Inject('BooksServiceClient')
    private readonly bookClient: ClientGrpcProxy,
    private readonly commonService: CCommonService
  ) {}

  private bookService: IBookService;

  onModuleInit(): void {
    this.bookService = this.bookClient.getService<IBookService>('CBooksServiceService');
  }

  @ResolveField('books')
  async getBooks(@Parent() publisher: Publisher) {
    return (await lastValueFrom(this.bookService.findByPublisherId({ id: publisher.id }))).books;
  }

  @ResolveField('authors')
  async getAuthors(@Parent() publisher: Publisher) {
    const { books } = await lastValueFrom(this.bookService.findByPublisherId({ id: publisher.id }));

    return this.commonService.findPublisherAuthors(books);
  }
}
