import { Module } from '@nestjs/common';

import { CAuthorResolver } from './author.resolver';
import { CAuthorService } from './author.service';

@Module({
  providers: [CAuthorResolver, CAuthorService],
  imports: [],
  exports: [CAuthorService],
})
export class CAuthorModule {}
