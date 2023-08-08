import { Controller, Get } from '@nestjs/common';

import { CAuthorsServiceService } from './authors-service.service';

@Controller()
export class CAuthorsServiceController {
  constructor(private readonly authorsServiceService: CAuthorsServiceService) {}

  @Get()
  getHello(): string {
    return this.authorsServiceService.getHello();
  }
}
