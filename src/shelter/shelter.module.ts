//criação de modulo (nest g module NOME DO MODULO)
import { Module } from '@nestjs/common';
import { ShelterController } from './shelter.controller';
import GetShelterDeatailsUseCase from './usecases/get.shelter.details.usecase';
import ShelterTokens from './shelter.tokens';
import { Mongoose } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { Shelter, ShelterSchema } from './schemas/shelter.schema';

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
  ],
})
export class ShelterModule {}
