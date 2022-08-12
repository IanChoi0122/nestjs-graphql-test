import { CreateHamsterInput } from './create-hamster.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateHamsterInput extends PartialType(CreateHamsterInput) {
  id: number;
}
