import { Inject, Injectable } from '@nestjs/common';
import { ClientGrpcProxy } from '@nestjs/microservices';
import { CreateBookInput } from 'apps/library-service/src/graphql';
import { CBookService } from 'apps/library-service/src/modules/book/book.service';
import { CCreateBookInput } from 'apps/library-service/src/modules/book/dto/create-book.input';
import { Observable, lastValueFrom } from 'rxjs';

import { IAuthorsService, TAuthor } from '../author/authors.interface';
import { IPublisherService, TPublisher } from '../publisher/publisher.interface';
@Injectable()
export class CCommonService {
  constructor(
    private readonly bookService: CBookService,
    @Inject('AuthorsServiceClient')
    private readonly authorsClient: ClientGrpcProxy,
    @Inject('PublishersServiceClient')
    private readonly publisherClient: ClientGrpcProxy
  ) {}

  private authorService: IAuthorsService;
  private publisherService: IPublisherService;

  onModuleInit(): void {
    this.authorService = this.authorsClient.getService<IAuthorsService>('CAuthorsServiceService');
    this.publisherService = this.publisherClient.getService<IPublisherService>('CPublishersServiceService');
  }

  async createBook(createBookInput: CCreateBookInput) {
    if (
      (await this.isExist<TPublisher>(createBookInput.publisherId, this.publisherService, 'Издатель')) &&
      (await Promise.all(
        createBookInput.authorsIds.map(
          async (authorId) => await this.isExist<TAuthor>(authorId, this.authorService, 'Автор')
        )
      ).then((arr) => arr.every((item) => item)))
    )
      return this.bookService.create(createBookInput);
  }

  async isExist<T>(id: number, service: { findOne(arg0: { id: number }): Observable<T> }, name: string) {
    try {
      if (await lastValueFrom(service.findOne({ id }))) return true;
    } catch (error) {
      throw new Error(name + ' с id = ' + id + ' не существует');
    }
  }

  async findPublisherAuthors(books: CreateBookInput[]) {
    const authors = await Promise.all(
      books.reduce(
        (acc, book) =>
          acc.concat(
            book.authorsIds.map(async (authorId) => await lastValueFrom(this.authorService.findOne({ id: authorId })))
          ),
        [] as Promise<TAuthor>[]
      )
    );

    return authors.reduce((acc, author) => {
      if (!acc.find((item) => item.id === author.id)) acc.push(author);

      return acc;
    }, [] as TAuthor[]);
  }
}
