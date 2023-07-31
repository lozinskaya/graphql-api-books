import { Injectable } from '@nestjs/common';

@Injectable()
export class CAuthorService {
  private authors = [
    { id: 1, firstName: 'Лев', lastName: 'Толстой' },
    { id: 2, firstName: 'Николай', lastName: 'Гоголь' },
  ];

  findAll() {
    return this.authors;
  }
}
