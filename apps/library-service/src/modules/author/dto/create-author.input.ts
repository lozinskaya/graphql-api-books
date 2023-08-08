import { CreateAuthorInput } from 'apps/library-service/src/graphql';
import { IsNotEmpty } from 'class-validator';

export class CCreateAuthorInput extends CreateAuthorInput {
  @IsNotEmpty()
  firstName: string;

  @IsNotEmpty()
  lastName: string;
}
