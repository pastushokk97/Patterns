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
  userId: 7777,
  firstname: chance.string({ length: 10 }),
  lastname: chance.string({ length: 10 }),
  role: Role.subscriber,
  agentId: null
};

const testAgent = {
  userId: 8888,
  firstname: chance.string({ length: 10 }),
  lastname: chance.string({ length: 10 }),
  role: Role.agent
};

const testWithAgent = {
  userId: 7780,
  firstname: chance.string({ length: 10 }),
  lastname: chance.string({ length: 10 }),
  role: Role.subscriber,
  agentId: 8888
};

const users = [
  {
    userId: 7778,
    firstname: chance.string({ length: 10 }),
    lastname: chance.string({ length: 10 }),
    role: Role.subscriber,
    agentId: AgentByDefault.userId
  },
  {
    userId: 7779,
    firstname: chance.string({ length: 10 }),
    lastname: chance.string({ length: 10 }),
    role: Role.subscriber,
    agentId: AgentByDefault.userId
  }
];

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
    await app.init();
  });
  afterEach(async () => {
    await entityManager.delete(SubscriberEntity, [
      testUser, testAgent, ...users
    ]);
  });

  afterAll(async () => {
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
    it('should save new user with agent', async () => {
      await entityManager.save(SubscriberEntity, testAgent);

      const { status, body } = await request(app.getHttpServer())
        .post('/observer/subscriber')
        .send(testWithAgent);

      expect(status).toStrictEqual(200);
      expect(body.userId).toStrictEqual(testWithAgent.userId);
      expect(body.agentId).toStrictEqual(testAgent.userId);
    });
    it('should response 404 due to subscriber doesn\'t exist', async () => {
      const { body } = await request(app.getHttpServer())
        .post('/observer/unsubscribe')
        .send({ userId: chance.integer({ min: 10000, max: 99999 }) });
      expect(body.status).toStrictEqual(404);
    });
    it('should unsubscribe user', async () => {
      await entityManager.save(SubscriberEntity, testUser);
      const { body } = await request(app.getHttpServer())
        .post('/observer/unsubscribe')
        .send({ userId: testUser.userId });
      expect(body.status).toStrictEqual(200);
    });
    it('should return all subscribers for agent', async () => {
      await entityManager.save(SubscriberEntity, users);

      const { body, status } = await request(app.getHttpServer())
        .get('/observer/mysubscribers')
        .send({ userId: AgentByDefault.userId });

      expect(status).toStrictEqual(200);
      expect(body).toHaveLength(users.length);
    });
    it('should notify users', async () => {
      const { body, status } = await request(app.getHttpServer())
        .post('/observer/notify')
        .send({ userId: AgentByDefault.userId });

      const { subscribers } = body;

      expect(status).toStrictEqual(200);
      for (let i = 0; i < subscribers.length; i++) {
        expect(subscribers).toContain(users[i].userId);
      }
    });
  });
});
