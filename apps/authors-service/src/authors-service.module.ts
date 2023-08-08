import { Module } from '@nestjs/common';

import { CAuthorsServiceController } from './authors-service.controller';
import { CAuthorsServiceService } from './authors-service.service';

@Module({
  imports: [],
  controllers: [CAuthorsServiceController],
  providers: [{ provide: 'CAuthorsServiceService', useClass: CAuthorsServiceService }],
})
export class CAuthorsServiceModule {}
