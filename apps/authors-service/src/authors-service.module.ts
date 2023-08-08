import { Module } from '@nestjs/common';
import { AuthorsServiceController } from './authors-service.controller';
import { AuthorsServiceService } from './authors-service.service';

@Module({
  imports: [],
  controllers: [AuthorsServiceController],
  providers: [AuthorsServiceService],
})
export class AuthorsServiceModule {}
