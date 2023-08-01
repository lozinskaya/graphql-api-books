import { Injectable } from '@nestjs/common';

import { CCreatePublisherInput } from './dto/create-publisher.input';

@Injectable()
export class CPublisherService {
  private publishers = [
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

  create(createPublisherInput: CCreatePublisherInput) {
    const newPublisher = {
      id: this.publishers.length + 1,
      ...createPublisherInput,
    };

    this.publishers.push(newPublisher);

    return newPublisher;
  }
}
