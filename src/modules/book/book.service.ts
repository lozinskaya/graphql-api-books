import { Injectable } from '@nestjs/common';
import { CAuthorService } from 'src/modules/author/author.service';
import { CPublisherService } from 'src/modules/publisher/publisher.service';

@Injectable()
export class CBookService {
  constructor(private readonly authorService: CAuthorService, private readonly publisherService: CPublisherService) {}
  private books = [
    { id: 1, title: 'Братья Карамазовы', publishedAt: '02-07-2022', authorsIds: [1], publisherId: 1 },
    { id: 2, title: 'Идиот', publishedAt: '25-07-2022', authorsIds: [1], publisherId: 1 },
    { id: 3, title: 'Двенадцать стульев', publishedAt: '25-07-2022', authorsIds: [3, 4], publisherId: 1 },
    { id: 4, title: 'Золотой теленок', publishedAt: '25-07-2022', authorsIds: [3, 4], publisherId: 1 },
  ];

  findAll() {
    return this.books.map((book) => {
      return {
        ...book,
        authors: book.authorsIds.map((authorId) => this.authorService.findOne(authorId)),
        publisher: this.publisherService.findOne(book.publisherId),
      };
    });
  }
}
