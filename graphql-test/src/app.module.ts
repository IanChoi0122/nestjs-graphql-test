import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {GraphQLModule} from "@nestjs/graphql";
import {ApolloDriver, ApolloDriverConfig} from "@nestjs/apollo";
import { CatModule } from './cat/cat.module';
import { join } from 'path';
import { DogModule } from './dog/dog.module';
import { HamstersModule } from './hamsters/hamsters.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      // useFactory: () => ({
        typePaths: ['./**/*.graphql'],
        definitions: {
          path: join(process.cwd(), 'src/graphql.ts'),
          outputAs: 'class',
        },
      // }),
    }),
    CatModule,
    DogModule,
    HamstersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
