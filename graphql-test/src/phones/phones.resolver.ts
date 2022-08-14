import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { PhonesService } from './phones.service';
import { CreatePhoneInput } from './dto/create-phone.input';
import { UpdatePhoneInput } from './dto/update-phone.input';

@Resolver('Phone')
export class PhonesResolver {
  constructor(private readonly phonesService: PhonesService) {}

  @Mutation('createPhone')
  create(@Args('createPhoneInput') createPhoneInput: CreatePhoneInput) {
    return this.phonesService.create(createPhoneInput);
  }

  @Query('phones')
  findAll() {
    return this.phonesService.findAll();
  }

  @Query('phone')
  findOne(@Args('id') id: number) {
    return this.phonesService.findOne(id);
  }

  @Mutation('updatePhone')
  update(@Args('updatePhoneInput') updatePhoneInput: UpdatePhoneInput) {
    return this.phonesService.update(updatePhoneInput.id, updatePhoneInput);
  }

  @Mutation('removePhone')
  remove(@Args('id') id: number) {
    return this.phonesService.remove(id);
  }
}
