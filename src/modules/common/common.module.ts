import { Module } from '@nestjs/common';
import { CAuthorModule } from 'src/modules/author';
import { CBookModule } from 'src/modules/book/book.module';
import { CPublisherModule } from 'src/modules/publisher/publisher.module';

import { CCommonResolver } from './common.resolver';
import { CCommonService } from './common.service';

@Module({
  providers: [CCommonResolver, CCommonService],
  imports: [CBookModule, CAuthorModule, CPublisherModule],
})
export class CCommonModule {}
