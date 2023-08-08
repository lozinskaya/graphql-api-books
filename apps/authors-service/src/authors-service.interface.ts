export interface ICreateAuthorInput {
  firstName: string;
  lastName: string;
}

export interface IAuthor {
  id: number;
  firstName: string;
  lastName: string;
}

export interface IAuthorsService {
  findAll(): IAuthor[];
  create(createAuthorInput: ICreateAuthorInput): IAuthor;
  findOne(id: number): IAuthor;
}
