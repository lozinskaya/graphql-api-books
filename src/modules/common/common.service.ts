import { Injectable } from '@nestjs/common';
import { CAuthorService } from 'src/modules/author/author.service';
import { CBookService } from 'src/modules/book/book.service';
import { CPublisherService } from 'src/modules/publisher/publisher.service';

@Injectable()
export class CCommonService {
  constructor(
    private readonly authorService: CAuthorService,
    private readonly publisherService: CPublisherService,
    private readonly bookService: CBookService
  ) {}

  findBooks() {
    return this.bookService.findAll().map((book) => {
      return {
        ...book,
        authors: book.authorsIds.map((authorId) => this.authorService.findOne(authorId)),
        publisher: this.publisherService.findOne(book.publisherId),
      };
    });
  }

  findAuthors() {
    return this.authorService.findAll().map((author) => {
      return {
        ...author,
        books: this.bookService.findAll().filter((book) => book.authorsIds.includes(author.id)),
      };
    });
  }
}
