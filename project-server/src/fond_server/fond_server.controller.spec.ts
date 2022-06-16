import { Test, TestingModule } from '@nestjs/testing';
import { FondServerController } from './fond_server.controller';

describe('FondServerController', () => {
  let controller: FondServerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FondServerController],
    }).compile();

    controller = module.get<FondServerController>(FondServerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
