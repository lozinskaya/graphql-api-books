import { CreatePublisherInput } from 'apps/library-service/src/graphql';
import { IsNotEmpty } from 'class-validator';

export class CCreatePublisherInput extends CreatePublisherInput {
  @IsNotEmpty()
  title: string;
}
