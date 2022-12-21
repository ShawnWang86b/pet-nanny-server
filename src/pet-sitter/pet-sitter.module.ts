import { Module } from '@nestjs/common';
import { PetSitterService } from './pet-sitter.service';
import { PetSitterController } from './pet-sitter.controller';

@Module({
  providers: [PetSitterService],
  controllers: [PetSitterController]
})
export class PetSitterModule {}
