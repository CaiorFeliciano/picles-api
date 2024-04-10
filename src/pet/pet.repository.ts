import { InjectModel } from '@nestjs/mongoose';
import IPetRepository from './interface/pet.repository.interface';
import { Pet } from './schema/pet.schema';
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';

@Injectable()
export default class PetRepository implements IPetRepository {
  constructor(
    @InjectModel(Pet.name)
    private readonly petModel: Model<Pet>,
  ) {}

  async getById(id: string): Promise<Pet> {
    return await this.petModel.findById(id);
  }

  async create(data: Partial<Pet>): Promise<Pet> {
    return await this.petModel.create({
      ...data,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  }
}