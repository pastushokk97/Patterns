import { Body, Controller, Get, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { Response } from 'express';
import { ObserverService, SubscriberService } from './observer.service';
import { createSubscriberDTO, unSubscribeDTO } from './interface/observer.dto';
import { AgentByDefault, Role } from './interface/observer.interface';

@Controller('observer')
export class ObserverController {
  constructor(
    private observer: ObserverService,
    private subscriber: SubscriberService,
  ) {
  }

  @Post('/subscriber')
  @HttpCode(HttpStatus.OK)
  async createSubscriber(@Body() body: createSubscriberDTO) {
    if (!body.agentId && body.role === Role.subscriber) {
      body.agentId = AgentByDefault.userId;
    }
    return this.subscriber.subscribe(body);
  }

  @Post('/unsubscribe')
  async unSubcsriber(@Body() body: unSubscribeDTO) {
    const removeSubcsriber = await this.subscriber.unsubscribe(body.userId);
    return removeSubcsriber ?
      { status: HttpStatus.OK } :
      { status: HttpStatus.NOT_FOUND };
  }

  @Get('/mysubscribers')
  @HttpCode(HttpStatus.OK)
  getMySubscribers(@Body() body) {
    const { userId } = body;
    return this.observer.getAllSubscribers(userId);
  }

  @Post('/notify')
  @HttpCode(HttpStatus.OK)
  async notifying(@Body() body) {
    const { userId } = body;

    return {
      title: 'Notifying those subscribers',
      subscribers: await this.observer.notifyMySubscribers(userId)
    };
  }
}
