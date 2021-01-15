import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StrategyModule } from "./strategy/stategy.module"

@Module({
  imports: [StrategyModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
