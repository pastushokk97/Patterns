import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ObserverController } from './observer.controller';
import { ObserverService, SubscriberService } from './observer.service';
import { SubscriberEntity } from '../entities/Subscribe.entity'

@Module({
  imports: [
    TypeOrmModule.forFeature([
      SubscriberEntity,
    ]),
  ],
  controllers: [ObserverController],
  providers: [SubscriberService, ObserverService],
})
export class ObserverModule {}