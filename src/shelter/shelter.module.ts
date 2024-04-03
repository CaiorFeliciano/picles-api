//criação de modulo (nest g module NOME DO MODULO)
import { Module } from '@nestjs/common';
import { ShelterController } from './shelter.controller';
import GetShelterDeatailsUseCase from './usecases/get.shelter.details.usecase';
import ShelterTokens from './shelter.tokens';

@Module({
  controllers: [ShelterController],
  providers: [
    {
      provide: ShelterTokens.getShelterDetailsUseCase,
      useClass: GetShelterDeatailsUseCase,
    },
  ],
})
export class ShelterModule {}
