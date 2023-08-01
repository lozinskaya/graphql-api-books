import { Module } from '@nestjs/common';
import { CAuthorModule } from 'src/modules/author';
import { CBookModule } from 'src/modules/book/book.module';
import { CPublisherModule } from 'src/modules/publisher/publisher.module';

import { CCommonResolver } from './common.resolver';
import { CCommonService } from './common.service';
import { CCommonAuthorResolver } from './resolvers/common-author.resolver';
import { CCommonBookResolver } from './resolvers/common-book.resolver';

@Module({
  providers: [CCommonResolver, CCommonBookResolver, CCommonAuthorResolver, CCommonService],
  imports: [CBookModule, CAuthorModule, CPublisherModule],
})
export class CCommonModule {}
