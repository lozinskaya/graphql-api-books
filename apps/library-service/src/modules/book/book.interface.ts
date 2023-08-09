import { CreateBookInput } from 'apps/library-service/src/graphql';
import { Observable } from 'rxjs';

export interface ICreateBookInput {
  createBookInput: CreateBookInput;
}

export interface IBookService {
  findByPublisherId(arg0: { id: number }): Observable<{ books: CreateBookInput[] }>;
  findByAuthorId(arg0: { id: number }): Observable<{ books: CreateBookInput[] }>;
  findAll(data: object): Observable<{ books: CreateBookInput[] }>;
  create(createBookInput: ICreateBookInput): Observable<CreateBookInput>;
  findOne(arg0: { id: number }): Observable<CreateBookInput>;
}
