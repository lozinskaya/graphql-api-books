import { CreateBookInput } from 'apps/library-service/src/graphql';
import { IsNotEmpty } from 'class-validator';

export class CCreateBookInput extends CreateBookInput {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  publishedAt: string;

  authorsIds: number[];

  @IsNotEmpty()
  publisherId: number;
}
