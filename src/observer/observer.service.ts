import { EntityManager } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectEntityManager } from '@nestjs/typeorm';
import { SubscriberEntity } from '../entities/Subscribe.entity';
import { Role, Subscriber } from './interface/observer.interface';

//TODO checking observer pattern
//TODO writing tests to each pattern

interface User {
  subscribe(subscriber: Subscriber): Promise<any>;
  unsubscribe(subscriberId: number): Promise<boolean>;
}

export interface Observer {
  updateSubscriber(userId: number, agentId: number, updateField: any): Promise<any>
  getAllSubscribers(id: number): Promise<SubscriberEntity[]>
  notifyMySubscribers(id:number): Promise<SubscriberEntity[]>;
}

@Injectable()
export class SubscriberService implements User {
  constructor(
    @InjectEntityManager()
    private entityManager: EntityManager,
  ) {
  }

  async subscribe(subscriber: Subscriber): Promise<SubscriberEntity | string> {
    const isExist = await this.entityManager.findOne(SubscriberEntity, subscriber.userId);
    if (isExist) {
      return 'This user is already existed';
    }
    return this.entityManager.save(SubscriberEntity, subscriber);
  }

  async unsubscribe(subscriberId: number): Promise<boolean> {
    const deleteSubscriber = await this.entityManager.delete(SubscriberEntity,subscriberId);

    return deleteSubscriber.affected === 1;
  }
}

@Injectable()
export class ObserverService implements  Observer {
  constructor(
    @InjectEntityManager()
    private entityManager: EntityManager,
  ) {
  }

  async getAllSubscribers(userId: number): Promise<SubscriberEntity[]> {
    return this.entityManager.find(SubscriberEntity, {
      agentId: userId,
      role: Role.subscriber
    });
  }
  async notifyMySubscribers(userId: number): Promise<SubscriberEntity[]> {
    const notifying = [];
    const subscribers = await this.entityManager.find(SubscriberEntity, {
      agentId: userId,
      role: Role.subscriber
    });

    for(const subscriber of subscribers) {
      notifying.push(subscriber.userId);
    }

    return notifying;
  }

  async updateSubscriber(userId: number, agentId: number, updateField: any): Promise<any> {
    const isBelong = await this.entityManager.findOne(SubscriberEntity,{userId,agentId});
    return isBelong ?
      this.entityManager.update(SubscriberEntity,{userId}, updateField)
      : 'This user doesn\'t belong to this agent';
  }
}
