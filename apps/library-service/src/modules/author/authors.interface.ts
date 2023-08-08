import { Author, CreateAuthorInput } from 'apps/library-service/src/graphql';
import { Observable } from 'rxjs';

export interface ICreateAuthorInput {
  createAuthorInput: CreateAuthorInput;
}

export type TAuthor = Omit<Author, 'books'>;
export interface IAuthorsService {
  findAll(data: object): Observable<{ authors: TAuthor[] }>;
  create(createAuthorInput: ICreateAuthorInput): Observable<TAuthor>;
  findOne(arg0: { id: number }): Observable<TAuthor>;
}
