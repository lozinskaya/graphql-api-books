import { Inject, Injectable } from '@nestjs/common';
import { ClientGrpcProxy } from '@nestjs/microservices';
import { CreateBookInput } from 'apps/library-service/src/graphql';
import { CBookService } from 'apps/library-service/src/modules/book/book.service';
import { CCreateBookInput } from 'apps/library-service/src/modules/book/dto/create-book.input';
import { CPublisherService } from 'apps/library-service/src/modules/publisher/publisher.service';

import { IAuthorsService } from '../author/authors.interface';
@Injectable()
export class CCommonService {
  constructor(
    private readonly publisherService: CPublisherService,
    private readonly bookService: CBookService,
    @Inject('AuthorsServiceClient')
    private readonly authorsClient: ClientGrpcProxy
  ) {}

  private authorService: IAuthorsService;

  onModuleInit(): void {
    this.authorService = this.authorsClient.getService<IAuthorsService>('CAuthorsServiceService');
  }

  createBook(createBookInput: CCreateBookInput) {
    // if (
    //   this.isExist(createBookInput.publisherId, this.publisherService, 'Издатель') &&
    //   createBookInput.authorsIds.every((authorId) => this.isExist(authorId, this.authorService, 'Автор'))
    // )
    return this.bookService.create(createBookInput);
  }

  isExist(id: number, service: { findOne(id: number): any }, name: string) {
    if (service.findOne(id)) return true;
    throw new Error(name + ' с id = ' + id + ' не существует');
  }

  findPublisherAuthors(books: CreateBookInput[]) {
    const authors = books.reduce(
      (acc, book) => acc.concat(book.authorsIds.map((authorId) => this.authorService.findOne({ id: authorId }))),
      []
    );

    return new Set(authors);
  }
}
