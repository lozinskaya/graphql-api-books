import { Injectable } from '@nestjs/common';

@Injectable()
export class CAuthorsServiceService {
  getHello(): string {
    return 'Hello World!';
  }
}
