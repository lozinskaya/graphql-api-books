import { Injectable } from '@nestjs/common';
import { Book, CreateBookInput } from 'src/graphql';

import { CCreateBookInput } from './dto/create-book.input';

@Injectable()
export class CBookService {
  private books: (Pick<Book, 'id'> & CreateBookInput)[] = [
    { id: 1, title: 'Братья Карамазовы', publishedAt: '02-07-2022', authorsIds: [1], publisherId: 1 },
    { id: 2, title: 'Идиот', publishedAt: '25-07-2022', authorsIds: [1], publisherId: 1 },
    { id: 3, title: 'Двенадцать стульев', publishedAt: '25-07-2022', authorsIds: [3, 4], publisherId: 2 },
    { id: 4, title: 'Золотой теленок', publishedAt: '25-07-2022', authorsIds: [3, 4], publisherId: 1 },
  ];

  findAll() {
    return this.books;
  }

  findOne(id: number) {
    return this.books.find((book) => book.id === id);
  }

  create(book: CCreateBookInput) {
    const newBook = { id: this.books.length + 1, ...book };

    this.books.push(newBook);

    return newBook;
  }

  findByAuthorId(id: number) {
    return this.books.filter((book) => book.authorsIds.includes(id));
  }

  findByPublisherId(id: number) {
    return this.books.filter((book) => book.publisherId === id);
  }
}
