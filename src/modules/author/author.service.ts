import { Injectable } from '@nestjs/common';

import { CCreateAuthorInput } from './dto/create-author.input';

@Injectable()
export class CAuthorService {
  private authors = [
    { id: 1, firstName: 'Лев', lastName: 'Толстой' },
    { id: 2, firstName: 'Николай', lastName: 'Гоголь' },
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
}
