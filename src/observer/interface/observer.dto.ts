import { IsString, IsNotEmpty, IsNumberString, IsEnum } from 'class-validator';
import { Role } from './observer.interface';

export class createSubscriberDTO {
  @IsNotEmpty()
  readonly userId: number;
  @IsString()
  readonly firstname: string;

  @IsString()
  readonly lastname: string;

  @IsString()
  @IsEnum(Role)
  readonly role: string;

  agentId: number;
}

export class unSubscribeDTO {
  @IsNotEmpty()
  readonly userId: number;
}
