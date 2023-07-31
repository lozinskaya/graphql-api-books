import { CAuthorModule } from './author';
import { CBookModule } from './book/book.module';
import { CCommonModule } from './common/common.module';
import { CPublisherModule } from './publisher/publisher.module';

export const modules = [CAuthorModule, CBookModule, CPublisherModule, CCommonModule];
