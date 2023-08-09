import { Injectable } from '@nestjs/common';

@Injectable()
export class CBooksServiceService {
  getHello(): string {
    return 'Hello World!';
  }
}
