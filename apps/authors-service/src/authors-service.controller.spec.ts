import { Test, TestingModule } from '@nestjs/testing';
import { AuthorsServiceController } from './authors-service.controller';
import { AuthorsServiceService } from './authors-service.service';

describe('AuthorsServiceController', () => {
  let authorsServiceController: AuthorsServiceController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AuthorsServiceController],
      providers: [AuthorsServiceService],
    }).compile();

    authorsServiceController = app.get<AuthorsServiceController>(AuthorsServiceController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(authorsServiceController.getHello()).toBe('Hello World!');
    });
  });
});
