import { Injectable } from '@nestjs/common';
import { CreateHamsterInput } from './dto/create-hamster.input';
import { UpdateHamsterInput } from './dto/update-hamster.input';

@Injectable()
export class HamstersService {
  create(createHamsterInput: CreateHamsterInput) {
    return 'This action adds a new hamster';
  }

  findAll() {
    return [
      {
        exampleField: 1,
        test: 'test'
      }
    ]
  }

  findOne(id: number) {
    return `This action returns a #${id} hamster`;
  }

  update(id: number, updateHamsterInput: UpdateHamsterInput) {
    return `This action updates a #${id} hamster`;
  }

  remove(id: number) {
    return `This action removes a #${id} hamster`;
  }
}
