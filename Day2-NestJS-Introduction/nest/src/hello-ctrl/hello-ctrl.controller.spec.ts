import { Test, TestingModule } from '@nestjs/testing';
import { HelloCtrlController } from './hello-ctrl.controller';

describe('HelloCtrlController', () => {
  let controller: HelloCtrlController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HelloCtrlController],
    }).compile();

    controller = module.get<HelloCtrlController>(HelloCtrlController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
