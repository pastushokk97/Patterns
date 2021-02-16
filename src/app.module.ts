import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StrategyModule } from './strategy/strategy.module';
import { ObserverModule } from './observer/observer.module';
import * as buildDatabaseConfig from '../src/typeorm.config';

@Module({
  imports: [
    StrategyModule,
    ObserverModule,
    TypeOrmModule.forRoot(buildDatabaseConfig)
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
