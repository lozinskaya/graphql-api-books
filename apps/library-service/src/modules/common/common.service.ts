import { Injectable } from '@nestjs/common';
import { CreateBookInput } from 'apps/library-service/src/graphql';
import { CAuthorService } from 'apps/library-service/src/modules/author/author.service';
import { CBookService } from 'apps/library-service/src/modules/book/book.service';
import { CCreateBookInput } from 'apps/library-service/src/modules/book/dto/create-book.input';
import { CPublisherService } from 'apps/library-service/src/modules/publisher/publisher.service';

@Injectable()
export class CCommonService {
  constructor(
    private readonly authorService: CAuthorService,
    private readonly publisherService: CPublisherService,
    private readonly bookService: CBookService
  ) {}

  createBook(createBookInput: CCreateBookInput) {
    if (
      this.isExist(createBookInput.publisherId, this.publisherService, 'Издатель') &&
      createBookInput.authorsIds.every((authorId) => this.isExist(authorId, this.authorService, 'Автор'))
    )
      return this.bookService.create(createBookInput);
  }

  isExist(id: number, service: { findOne(id: number): any }, name: string) {
    if (service.findOne(id)) return true;
    throw new Error(name + ' с id = ' + id + ' не существует');
  }

  findPublisherAuthors(books: CreateBookInput[]) {
    const authors = books.reduce(
      (acc, book) => acc.concat(book.authorsIds.map((authorId) => this.authorService.findOne(authorId))),
      []
    );

    return new Set(authors);
  }
}
