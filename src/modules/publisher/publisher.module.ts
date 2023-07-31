import { Module } from '@nestjs/common';

import { CPublisherResolver } from './publisher.resolver';
import { CPublisherService } from './publisher.service';

@Module({
  providers: [CPublisherResolver, CPublisherService],
  exports: [CPublisherService],
})
export class CPublisherModule {}
