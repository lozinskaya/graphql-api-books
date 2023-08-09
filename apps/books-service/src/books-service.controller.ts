import { Controller, Get } from '@nestjs/common';

import { CBooksServiceService } from './books-service.service';

@Controller()
export class CBooksServiceController {
  constructor(private readonly booksServiceService: CBooksServiceService) {}

  @Get()
  getHello(): string {
    return this.booksServiceService.getHello();
  }
}
