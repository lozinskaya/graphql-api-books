import { Query, Resolver, Args } from '@nestjs/graphql';

import { CCommonService } from './common.service';

@Resolver('Common')
export class CCommonResolver {
  constructor(private readonly commonService: CCommonService) {}

  @Query('publishers')
  findPublishers() {
    return this.commonService.findPublishers();
  }

  @Query('publisher')
  findPublisher(@Args('id') id: number) {
    return this.commonService.findPublisher(id);
  }
}
