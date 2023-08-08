import { CreatePublisherInput, Publisher } from 'apps/library-service/src/graphql';
import { Observable } from 'rxjs';

export interface ICreatePublisherInput {
  createPublisherInput: CreatePublisherInput;
}

export type TPublisher = Omit<Publisher, 'books' | 'authors'>;

export interface IPublisherService {
  findAll(data: object): Observable<{ publishers: TPublisher[] }>;
  create(createPublisherInput: ICreatePublisherInput): Observable<TPublisher>;
  findOne(arg0: { id: number }): Observable<TPublisher>;
}
