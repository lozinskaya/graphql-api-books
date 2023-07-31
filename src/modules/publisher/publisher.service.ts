import { Injectable } from '@nestjs/common';

@Injectable()
export class CPublisherService {
  private publishers = [
    {
      id: 1,
      title: 'Эксмо',
    },
  ];

  findAll() {
    return this.publishers.map;
  }

  findOne(id: number) {
    return this.publishers.find((publisher) => publisher.id === id);
  }
}
