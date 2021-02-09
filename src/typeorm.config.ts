import { join } from 'path';
import { ConnectionOptions } from 'typeorm';
import { SubscriberEntity } from './entities/Subscribe.entity';

const buildDatabaseConfig = {
  type: 'postgres',
  synchronize: false,
  migrationsRun: true,
  migrations: [join(__dirname, '../../migrations/*{.ts,.js}')],
  logging: false,
  entities: [SubscriberEntity],
  cli: { migrationsDir: 'migrations' },
  username: 'postgres',
  password: 'password',
  database: 'postgres',
  host: 'localhost',
} as ConnectionOptions;

export = buildDatabaseConfig;