import { IsNotEmpty } from 'class-validator';
import { CreateBookInput } from 'src/graphql';

export class CCreateBookInput extends CreateBookInput {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  publishedAt: string;

  authorsIds: number[];

  @IsNotEmpty()
  publisherId: number;
}
