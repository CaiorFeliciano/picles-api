import { IUseCase } from 'src/domain/iusecase.interface';
import GetShelterDetailsUseCaseOutput from './dtos/get.shelter.details.usecase.output';
import { never } from 'rxjs';

export default class GetShelterDeatailsUseCase
  implements IUseCase<null, GetShelterDetailsUseCaseOutput>
{
  run(input: null): Promise<GetShelterDetailsUseCaseOutput> {
    return Promise.resolve(
      new GetShelterDetailsUseCaseOutput({
        shelterName: 'Abrigo 1',
        shelterEmail: 'abrigo@mail.com',
        shelterPhone: '19912345678',
        shelterWhatsApp: '19912345678',
        createdAt: new Date(),
        updateAt: new Date(),
      }),
    );
  }
}
