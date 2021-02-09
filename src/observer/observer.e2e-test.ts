import * as request from 'supertest';
import * as Chance from 'chance';
import { Test } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EntityManager, getConnection } from 'typeorm';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as buildDatabaseConfig from '../typeorm.config';
import { ObserverService } from './observer.service';
import { ObserverModule } from './observer.module';
import { SubscriberEntity } from '../entities/Subscribe.entity';
import { Role, AgentByDefault } from './interface/observer.interface';

const chance = new Chance();

const testUser = {
  userId: chance.integer({ min: 10000, max: 99999 }),
  firstname: chance.string({length: 10}),
  lastname: chance.string({length: 10}),
  role: Role.subscriber
};

const testAgent = {
  userId: chance.integer({ min: 10000, max: 99999 }),
  firstname: chance.string({length: 10}),
  lastname: chance.string({length: 10}),
  role: Role.agent
};

describe('Observer', () => {
  let app: INestApplication;
  let observerService: ObserverService;
  let entityManager: EntityManager;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [
        ObserverModule,
        TypeOrmModule.forRoot(buildDatabaseConfig),
      ],
    }).compile();

    entityManager = new EntityManager(getConnection());
    observerService = moduleRef.get('ObserverService');
    app = moduleRef.createNestApplication();

    app.useGlobalPipes(new ValidationPipe());
    await entityManager.save(SubscriberEntity, AgentByDefault);
    await app.init();
  });

  afterAll(async () => {
    await entityManager.delete(SubscriberEntity, [testUser, testAgent]);
    await app.close();
  });

  describe('Observer Controller', () => {
    it('should save new user with default agent', async () => {

      const { status, body } = await request(app.getHttpServer())
        .post('/observer/subscriber')
        .send(testUser);

      expect(status).toStrictEqual(200);
      expect(body.userId).toStrictEqual(testUser.userId);
      expect(body.agentId).toStrictEqual(AgentByDefault.userId);
    });
    it('should save new agent', async () => {

      const { status, body } = await request(app.getHttpServer())
        .post('/observer/subscriber')
        .send(testAgent);

      expect(status).toStrictEqual(200);
      expect(body.userId).toStrictEqual(testAgent.userId);
      expect(body.agentId).toBeNull();
    });
  });
});