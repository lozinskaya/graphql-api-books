import { Injectable } from '@nestjs/common';
import { CAuthorService } from 'src/modules/author/author.service';

@Injectable()
export class CBookService {
  constructor(private readonly authorService: CAuthorService) {}
  private books = [
    { id: 1, title: 'Братья Карамазовы', publishedAt: '02-07-2022', authorsIds: [1] },
    { id: 2, title: 'Идиот', publishedAt: '25-07-2022', authorsIds: [1] },
    { id: 3, title: 'Двенадцать стульев', publishedAt: '25-07-2022', authorsIds: [3, 4] },
    { id: 4, title: 'Золотой теленок', publishedAt: '25-07-2022', authorsIds: [3, 4] },
  ];

  findAll() {
    return this.books.map((book) => {
      return { ...book, authors: book.authorsIds.map((authorId) => this.authorService.findOne(authorId)) };
    });
  }
}
