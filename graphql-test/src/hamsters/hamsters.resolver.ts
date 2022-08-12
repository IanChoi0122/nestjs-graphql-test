import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { HamstersService } from './hamsters.service';
import { CreateHamsterInput } from './dto/create-hamster.input';
import { UpdateHamsterInput } from './dto/update-hamster.input';

@Resolver('Hamster')
export class HamstersResolver {
  constructor(private readonly hamstersService: HamstersService) {}

  @Mutation('createHamster')
  create(@Args('createHamsterInput') createHamsterInput: CreateHamsterInput) {
    return this.hamstersService.create(createHamsterInput);
  }

  @Query('hamsters')
  findAll() {
    return this.hamstersService.findAll();
  }

  @Query('hamster')
  findOne(@Args('id') id: number) {
    return this.hamstersService.findOne(id);
  }

  @Mutation('updateHamster')
  update(@Args('updateHamsterInput') updateHamsterInput: UpdateHamsterInput) {
    return this.hamstersService.update(updateHamsterInput.id, updateHamsterInput);
  }

  @Mutation('removeHamster')
  remove(@Args('id') id: number) {
    return this.hamstersService.remove(id);
  }
}
