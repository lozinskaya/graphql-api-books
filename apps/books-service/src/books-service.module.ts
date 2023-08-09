import { Module } from '@nestjs/common';

import { CBooksServiceController } from './books-service.controller';
import { CBooksServiceService } from './books-service.service';

@Module({
  imports: [],
  controllers: [CBooksServiceController],
  providers: [{ provide: 'CBooksServiceService', useClass: CBooksServiceService }],
})
export class CBooksServiceModule {}
