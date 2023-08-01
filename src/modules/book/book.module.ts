import { Module } from '@nestjs/common';
import { CAuthorModule } from 'src/modules/author';
import { CPublisherModule } from 'src/modules/publisher';

import { CBookResolver } from './book.resolver';
import { CBookService } from './book.service';

@Module({
  providers: [CBookResolver, CBookService],
  imports: [CAuthorModule, CPublisherModule],
  exports: [CBookService],
})
export class CBookModule {}
