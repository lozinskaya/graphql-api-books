import { Module } from '@nestjs/common';

import { CBookResolver } from './book.resolver';
import { CBookService } from './book.service';

@Module({
  providers: [CBookResolver, CBookService],
  imports: [],
  exports: [CBookService],
})
export class CBookModule {}
