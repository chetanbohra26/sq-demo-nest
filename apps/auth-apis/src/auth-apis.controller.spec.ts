import { Test, TestingModule } from '@nestjs/testing';
import { AuthApisController } from './auth-apis.controller';
import { AuthApisService } from './auth-apis.service';

describe('AuthApisController', () => {
  let authApisController: AuthApisController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AuthApisController],
      providers: [AuthApisService],
    }).compile();

    authApisController = app.get<AuthApisController>(AuthApisController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(authApisController.getHello()).toBe('Hello World!');
    });
  });
});
