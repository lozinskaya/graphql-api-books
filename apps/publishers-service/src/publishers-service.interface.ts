export interface ICreatePublisherInput {
  title: string;
}

export interface IPublisher {
  id: number;
  title: string;
}

export interface IPublisherService {
  findAll(): IPublisher[];
  create(createPublisherInput: ICreatePublisherInput): IPublisher;
  findOne(id: number): IPublisher;
}
