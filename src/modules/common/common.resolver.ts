import { Query, Resolver } from '@nestjs/graphql';

import { CCommonService } from './common.service';

@Resolver('Common')
export class CCommonResolver {
  constructor(private readonly commonService: CCommonService) {}

  @Query('books')
  findAll() {
    return this.commonService.findAll();
  }
}
