import { CreatePhoneInput } from './create-phone.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdatePhoneInput extends PartialType(CreatePhoneInput) {
  id: number;
}
