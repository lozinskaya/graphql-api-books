export interface ICreateBookInput {
  title: string;
  publishedAt: string;
  authorsIds: number[];
  publisherId: number;
}

export interface IBook {
  id: number;
  title: string;
  publishedAt: string;
  authorsIds: number[];
  publisherId: number;
}

export interface IBookService {
  findAll(): IBook[];
  create(createBookInput: ICreateBookInput): IBook;
  findOne(id: number): IBook;
  findByAuthorId(id: number): IBook[];
  findByPublisherId(id: number): IBook[];
}
