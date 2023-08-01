import { IsNotEmpty } from 'class-validator';
import { CreatePublisherInput } from 'src/graphql';

export class CCreatePublisherInput extends CreatePublisherInput {
  @IsNotEmpty()
  title: string;
}
