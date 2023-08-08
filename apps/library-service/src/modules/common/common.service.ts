import { Inject, Injectable } from '@nestjs/common';
import { ClientGrpcProxy } from '@nestjs/microservices';
import { CreateBookInput } from 'apps/library-service/src/graphql';
import { CBookService } from 'apps/library-service/src/modules/book/book.service';
import { CCreateBookInput } from 'apps/library-service/src/modules/book/dto/create-book.input';
import { CPublisherService } from 'apps/library-service/src/modules/publisher/publisher.service';
import { lastValueFrom } from 'rxjs';

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

  async createBook(createBookInput: CCreateBookInput) {
    if (
      this.isPublisherExist(createBookInput.publisherId) &&
      (await Promise.all(createBookInput.authorsIds.map(async (authorId) => await this.isAuthorExist(authorId))).then(
        (arr) => arr.every((item) => item)
      ))
    )
      return this.bookService.create(createBookInput);
  }

  isPublisherExist(id: number) {
    if (this.publisherService.findOne(id)) return true;
    throw new Error('Издателя с id = ' + id + ' не существует');
  }

  async isAuthorExist(id: number) {
    try {
      if (await lastValueFrom(this.authorService.findOne({ id }))) return true;
    } catch (error) {
      throw new Error('Автора с id = ' + id + ' не существует');
    }
  }

  findPublisherAuthors(books: CreateBookInput[]) {
    const authors = books.reduce(
      (acc, book) =>
        acc.concat(
          book.authorsIds.map(async (authorId) => await lastValueFrom(this.authorService.findOne({ id: authorId })))
        ),
      []
    );

    return new Set(authors);
  }
}
