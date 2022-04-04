import { Test, TestingModule } from '@nestjs/testing';
import { BasechildController } from './basechild.controller';

describe('BasechildController', () => {
  let controller: BasechildController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BasechildController],
    }).compile();

    controller = module.get<BasechildController>(BasechildController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
