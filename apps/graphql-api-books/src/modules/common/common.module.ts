import { Module } from '@nestjs/common';
import { CAuthorModule } from 'src/modules/author';
import { CBookModule } from 'src/modules/book/book.module';
import { CPublisherModule } from 'src/modules/publisher/publisher.module';

import { CCommonService } from './common.service';
import { CCommonAuthorResolver } from './resolvers/common-author.resolver';
import { CCommonBookResolver } from './resolvers/common-book.resolver';
import { CCommonPublisherResolver } from './resolvers/common-publisher.resolver';

@Module({
  providers: [CCommonBookResolver, CCommonAuthorResolver, CCommonPublisherResolver, CCommonService],
  imports: [CBookModule, CAuthorModule, CPublisherModule],
})
export class CCommonModule {}
