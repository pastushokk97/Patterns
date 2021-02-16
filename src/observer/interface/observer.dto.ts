import { IsString, IsNotEmpty, IsEnum, IsOptional, IsNumberString } from 'class-validator';
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

  @IsOptional()
  agentId: number;
}

export class unSubscribeDTO {
  @IsNotEmpty()
  readonly userId: number;
}
