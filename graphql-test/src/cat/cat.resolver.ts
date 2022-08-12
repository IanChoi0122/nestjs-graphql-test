import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CatService } from './cat.service';
import { CreateCatInput } from './dto/create-cat.input';
import { UpdateCatInput } from './dto/update-cat.input';

@Resolver('Cat')
export class CatResolver {
  constructor(private readonly catService: CatService) {}

  @Mutation('createCat')
  create(@Args('createCatInput') createCatInput: CreateCatInput) {
    return this.catService.create(createCatInput);
  }

  @Query('cat')
  findAll() {
    return this.catService.findAll();
  }

  @Query('cat')
  findOne(@Args('id') id: number) {
    return this.catService.findOne(id);
  }

  @Mutation('updateCat')
  update(@Args('updateCatInput') updateCatInput: UpdateCatInput) {
    return this.catService.update(updateCatInput.id, updateCatInput);
  }

  @Mutation('removeCat')
  remove(@Args('id') id: number) {
    return this.catService.remove(id);
  }
}
