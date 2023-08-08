import { Injectable } from '@nestjs/common';

import { IAuthor, IAuthorsService, ICreateAuthorInput } from './authors-service.interface';

@Injectable()
export class CAuthorsServiceService implements IAuthorsService {
  private authors: IAuthor[] = [
    { id: 1, firstName: 'Федор', lastName: 'Достоевский' },
    { id: 2, firstName: 'Николай', lastName: 'Гоголь' },
    { id: 3, firstName: 'Илья', lastName: 'Ильф' },
    { id: 4, firstName: 'Евгений', lastName: 'Петров' },
  ];

  findAll() {
    return this.authors;
  }

  create(createAuthorInput: ICreateAuthorInput) {
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
