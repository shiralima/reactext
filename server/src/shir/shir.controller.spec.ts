import { Test, TestingModule } from '@nestjs/testing';
import { ShirController } from './shir.controller';

describe('ShirController', () => {
  let controller: ShirController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ShirController],
    }).compile();

    controller = module.get<ShirController>(ShirController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
