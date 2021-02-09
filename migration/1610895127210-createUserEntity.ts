import {MigrationInterface, QueryRunner} from 'typeorm';

export class createSubscriberEntity1610895127210 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`CREATE TYPE role_enum AS ENUM('agent','subscriber')`)
    await queryRunner.query(`CREATE TABLE "user" (
            user_id int,
            firstname varchar(255),
            lastname varchar(255),
            role role_enum DEFAULT 'subscriber',
            agent_id int, CONSTRAINT "PK_ba7801f6517b80000c09de8f90d" PRIMARY KEY ("user_id")
            );
        `);
    await queryRunner.query('ALTER TABLE "user" ADD FOREIGN KEY ("agent_id") REFERENCES "user"(user_id) ON DELETE CASCADE');
    await queryRunner.query(`INSERT INTO "user" (user_id, firstname, lastname, role) VALUES (9999, 'default', 'default', 'agent')`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE "user"');
  }

}
