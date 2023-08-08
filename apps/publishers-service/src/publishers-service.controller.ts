import { Controller, Get } from '@nestjs/common';

import { CPublishersServiceService } from './publishers-service.service';

@Controller()
export class CPublishersServiceController {
  constructor(private readonly publishersServiceService: CPublishersServiceService) {}

  @Get()
  getHello(): string {
    return this.publishersServiceService.getHello();
  }
}
