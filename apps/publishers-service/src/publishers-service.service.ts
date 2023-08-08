import { Injectable } from '@nestjs/common';

import { IPublisher, ICreatePublisherInput } from './publishers-service.interface';

@Injectable()
export class CPublishersServiceService {
  private publishers: IPublisher[] = [
    {
      id: 1,
      title: 'Эксмо',
    },
    {
      id: 2,
      title: 'АСТ',
    },
  ];

  findAll() {
    return this.publishers;
  }

  findOne(id: number) {
    return this.publishers.find((publisher) => publisher.id === id);
  }

  create(createPublisherInput: ICreatePublisherInput) {
    const newPublisher = {
      id: this.publishers.length + 1,
      ...createPublisherInput,
    };

    this.publishers.push(newPublisher);

    return newPublisher;
  }
}
