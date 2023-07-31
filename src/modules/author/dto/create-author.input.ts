import { IsDefined, IsNotEmpty } from 'class-validator';

export class CCreateAuthorInput {
  @IsDefined()
  @IsNotEmpty()
  firstName: string;

  @IsDefined()
  @IsNotEmpty()
  lastName: string;
}
