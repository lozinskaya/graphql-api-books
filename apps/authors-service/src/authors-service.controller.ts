import { Controller, Get } from '@nestjs/common';
import { AuthorsServiceService } from './authors-service.service';

@Controller()
export class AuthorsServiceController {
  constructor(private readonly authorsServiceService: AuthorsServiceService) {}

  @Get()
  getHello(): string {
    return this.authorsServiceService.getHello();
  }
}
