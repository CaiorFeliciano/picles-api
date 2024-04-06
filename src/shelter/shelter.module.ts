//criação de modulo (nest g module NOME DO MODULO)
import { Module } from '@nestjs/common';
import { ShelterController } from './shelter.controller';
import GetShelterDeatailsUseCase from './usecases/get.shelter.details.usecase';
import ShelterTokens from './shelter.tokens';
import { Mongoose } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { Shelter, ShelterSchema } from './schemas/shelter.schema';
import { ShelterRepository } from './shelter.repository';
import UpdateShelterDetailsUseCase from './usecases/update.shelter.details.usecase';

@Module({
  controllers: [ShelterController],
  imports: [
    MongooseModule.forFeature([{ name: Shelter.name, schema: ShelterSchema }]),
  ],
  providers: [
    {
      provide: ShelterTokens.getShelterDetailsUseCase,
      useClass: GetShelterDeatailsUseCase,
    },
    {
      provide: ShelterTokens.updateShelterDetailsUseCase,
      useClass: UpdateShelterDetailsUseCase,
    },
    {
      provide: ShelterTokens.shelterRepository,
      useClass: ShelterRepository,
    },
  ],
})
export class ShelterModule {}
