import { ICreateAuthorInput } from 'apps/authors-service/src/authors-service.interface';
import { IsNotEmpty } from 'class-validator';

export class CCreateAuthorInput implements ICreateAuthorInput {
  @IsNotEmpty()
  firstName: string;

  @IsNotEmpty()
  lastName: string;
}
