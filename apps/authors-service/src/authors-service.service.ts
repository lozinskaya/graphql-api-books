import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthorsServiceService {
  getHello(): string {
    return 'Hello World!';
  }
}
