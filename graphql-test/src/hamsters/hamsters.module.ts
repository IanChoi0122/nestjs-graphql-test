import { Module } from '@nestjs/common';
import { HamstersService } from './hamsters.service';
import { HamstersResolver } from './hamsters.resolver';

@Module({
  providers: [HamstersResolver, HamstersService]
})
export class HamstersModule {}
