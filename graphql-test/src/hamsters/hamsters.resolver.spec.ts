import { Test, TestingModule } from '@nestjs/testing';
import { HamstersResolver } from './hamsters.resolver';
import { HamstersService } from './hamsters.service';

describe('HamstersResolver', () => {
  let resolver: HamstersResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HamstersResolver, HamstersService],
    }).compile();

    resolver = module.get<HamstersResolver>(HamstersResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
