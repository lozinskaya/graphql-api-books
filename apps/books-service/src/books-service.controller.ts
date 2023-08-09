import { Controller, Inject } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';

import { IBookService, ICreateBookInput } from './books-service.interface';

@Controller()
export class CBooksServiceController {
  constructor(
    @Inject('CBooksServiceService')
    private readonly bookService: IBookService
  ) {}

  @GrpcMethod('CBooksServiceService', 'FindAll')
  findAll() {
    return { books: this.bookService.findAll() };
  }

  @GrpcMethod('CBooksServiceService', 'FindOne')
  findOne(data: { id: number }) {
    return this.bookService.findOne(data.id);
  }

  @GrpcMethod('CBooksServiceService', 'Create')
  create(data: { createBookInput: ICreateBookInput }) {
    return this.bookService.create(data.createBookInput);
  }

  @GrpcMethod('CBooksServiceService', 'FindByAuthorId')
  findByAuthorId(data: { id: number }) {
    return { books: this.bookService.findByAuthorId(data.id) };
  }

  @GrpcMethod('CBooksServiceService', 'FindByPublisherId')
  findByPublisherId(data: { id: number }) {
    return { books: this.bookService.findByPublisherId(data.id) };
  }
}
