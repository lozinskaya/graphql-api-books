import { Controller, Inject } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';

import { IAuthorsService, ICreateAuthorInput } from './authors-service.interface';

@Controller()
export class CAuthorsServiceController {
  constructor(
    @Inject('CAuthorsServiceService')
    private readonly authorsServiceService: IAuthorsService
  ) {}

  @GrpcMethod('CAuthorsServiceService', 'FindAll')
  findAll() {
    return { authors: this.authorsServiceService.findAll() };
  }

  @GrpcMethod('CAuthorsServiceService', 'Create')
  create(data: { createAuthorInput: ICreateAuthorInput }) {
    return this.authorsServiceService.create(data.createAuthorInput);
  }

  @GrpcMethod('CAuthorsServiceService', 'FindOne')
  findOne(data: { id: number }) {
    return this.authorsServiceService.findOne(data.id);
  }
}
