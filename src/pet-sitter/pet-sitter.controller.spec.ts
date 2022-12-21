import { Test, TestingModule } from '@nestjs/testing';
import { PetSitterController } from './pet-sitter.controller';

describe('PetSitterController', () => {
  let controller: PetSitterController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PetSitterController],
    }).compile();

    controller = module.get<PetSitterController>(PetSitterController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
