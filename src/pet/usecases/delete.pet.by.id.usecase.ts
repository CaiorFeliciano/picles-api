import { IUseCase } from 'src/domain/iusecase.interface';
import DeletePetByIdUseCaseInput from './dtos/delete.pet.by.id.usecase.input';
import DeletePetByIdUseCaseOutput from './dtos/delete.pet.by.id.usecase.output';
import { Injectable } from '@nestjs/common';

@Injectable()
export default class DeletePetByIdUseCase
  implements IUseCase<DeletePetByIdUseCaseInput, DeletePetByIdUseCaseOutput>
{
  run(input: DeletePetByIdUseCaseInput): Promise<DeletePetByIdUseCaseOutput> {
    throw new Error('Method not implemented.');
  }
}
