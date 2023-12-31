import { Controller, Inject } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';

import { ICreatePublisherInput, IPublisherService } from './publishers-service.interface';

@Controller()
export class CPublishersServiceController {
  constructor(
    @Inject('CPublishersServiceService')
    private readonly publishersServiceService: IPublisherService
  ) {}

  @GrpcMethod('CPublishersServiceService', 'FindAll')
  findAll() {
    return { publishers: this.publishersServiceService.findAll() };
  }

  @GrpcMethod('CPublishersServiceService', 'Create')
  create(data: { createPublisherInput: ICreatePublisherInput }) {
    return this.publishersServiceService.create(data.createPublisherInput);
  }

  @GrpcMethod('CPublishersServiceService', 'FindOne')
  findOne(data: { id: number }) {
    return this.publishersServiceService.findOne(data.id);
  }
}
