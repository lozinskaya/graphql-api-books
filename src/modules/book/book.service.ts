import { Injectable } from '@nestjs/common';

@Injectable()
export class CBookService {
  private books = [
    { id: 1, title: 'Братья Карамазовы', publishedAt: '02-07-2022', authorsIds: [1], publisherId: 1 },
    { id: 2, title: 'Идиот', publishedAt: '25-07-2022', authorsIds: [1], publisherId: 1 },
    { id: 3, title: 'Двенадцать стульев', publishedAt: '25-07-2022', authorsIds: [3, 4], publisherId: 2 },
    { id: 4, title: 'Золотой теленок', publishedAt: '25-07-2022', authorsIds: [3, 4], publisherId: 1 },
  ];

  findAll() {
    return this.books;
  }

  findByAuthorId(id: number) {
    return this.books.filter((book) => book.authorsIds.includes(id));
  }

  findByPublisherId(id: number) {
    return this.books.filter((book) => book.publisherId === id);
  }
}
