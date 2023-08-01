import { IsDefined, IsNotEmpty } from 'class-validator';

export class CCreatePublisherInput {
  @IsDefined()
  @IsNotEmpty()
  title: string;
}
