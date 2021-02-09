import { Entity, Column,PrimaryColumn } from 'typeorm';
import { Role } from '../observer/interface/observer.interface'

@Entity('user')
export class SubscriberEntity {
  @PrimaryColumn({
    nullable: false,
    name: 'user_id'
  })
  public userId: number;

  @Column('character varying', {
    nullable: true,
    name: 'firstname'
  })
  public firstname?: string;

  @Column('character varying', {
    nullable: true,
    name: 'lastname'
  })
  public lastname?: string;

  @Column('enum', {
    nullable: true,
    name: 'role',
    enum: Role
  })
  public role?: string;

  @Column('int', {
    nullable: true,
    name: 'agent_id'
  })
  public agentId?: number;
}
