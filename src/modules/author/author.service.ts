import { Injectable } from '@nestjs/common';

import { CCreateAuthorInput } from './dto/create-author.input';

@Injectable()
export class CAuthorService {
  private authors = [
    { id: 1, firstName: 'Федор', lastName: 'Достоевский' },
    { id: 2, firstName: 'Николай', lastName: 'Гоголь' },
    { id: 3, firstName: 'Илья', lastName: 'Ильф' },
    { id: 4, firstName: 'Евгений', lastName: 'Петров' },
  ];

  findAll() {
    return this.authors;
  }

  create(createAuthorInput: CCreateAuthorInput) {
    const newAuthor = {
      id: this.authors.length + 1,
      ...createAuthorInput,
    };

    this.authors.push(newAuthor);

    return newAuthor;
  }

  findOne(id: number) {
    return this.authors.find((author) => author.id === id);
  }
}
