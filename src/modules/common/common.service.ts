import { Injectable } from '@nestjs/common';
import { CAuthorService } from 'src/modules/author/author.service';
import { CBookService } from 'src/modules/book/book.service';
import { CCreateBookInput } from 'src/modules/book/dto/create-book.input';
import { CPublisherService } from 'src/modules/publisher/publisher.service';

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

  findAuthors() {
    return this.authorService.findAll().map((author) => {
      return {
        ...author,
        books: this.bookService.findByAuthorId(author.id),
      };
    });
  }

  findAuthor(id: number) {
    return { ...this.authorService.findOne(id), books: this.bookService.findByAuthorId(id) };
  }

  findPublishers() {
    return this.publisherService.findAll().map((publisher) => {
      const books = this.bookService.findByPublisherId(publisher.id);
      const authors = this.findPublisherAuthors(books);

      return {
        ...publisher,
        books,
        authors,
      };
    });
  }

  findPublisher(id: number) {
    const books = this.bookService.findByPublisherId(id);

    return {
      ...this.publisherService.findOne(id),
      books,
      authors: this.findPublisherAuthors(books),
    };
  }

  findPublisherAuthors(
    books: {
      id: number;
      title: string;
      publishedAt: string;
      authorsIds: number[];
      publisherId: number;
    }[]
  ) {
    const authors = books.reduce(
      (acc, book) => acc.concat(book.authorsIds.map((authorId) => this.authorService.findOne(authorId))),
      []
    );

    return new Set(authors);
  }
}
