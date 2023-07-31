import { Injectable } from '@nestjs/common';

@Injectable()
export class CBookService {
  private books = [
    { id: 1, title: 'Анна Каренина', publishedAt: '02-07-2022' },
    { id: 2, title: 'Война и мир', publishedAt: '25-07-2022' },
  ];

  findAll() {
    return this.books;
  }
}
