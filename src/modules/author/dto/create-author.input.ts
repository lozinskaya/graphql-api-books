import { IsNotEmpty } from 'class-validator';
import { CreateAuthorInput } from 'src/graphql';

export class CCreateAuthorInput extends CreateAuthorInput {
  @IsNotEmpty()
  firstName: string;

  @IsNotEmpty()
  lastName: string;
}
