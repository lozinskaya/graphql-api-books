import { Module } from '@nestjs/common';

import { CPublishersServiceController } from './publishers-service.controller';
import { CPublishersServiceService } from './publishers-service.service';

@Module({
  imports: [],
  controllers: [CPublishersServiceController],
  providers: [CPublishersServiceService],
})
export class CPublishersServiceModule {}
