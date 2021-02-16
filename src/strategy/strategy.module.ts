import { Module } from '@nestjs/common';
import { StrategyController } from './strategy.controller';
import { StrategyService } from './strategy.service';

@Module({
  imports: [],
  controllers: [StrategyController],
  providers: [StrategyService],
})
export class StrategyModule {}
