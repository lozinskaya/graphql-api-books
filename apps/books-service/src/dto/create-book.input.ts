import { IsNotEmpty } from 'class-validator';

import { ICreateBookInput } from '../books-service.interface';

export class CCreateBookInput implements ICreateBookInput {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  publishedAt: string;

  authorsIds: number[];

  @IsNotEmpty()
  publisherId: number;
}
