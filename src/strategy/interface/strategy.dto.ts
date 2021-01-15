import { IsString, IsNumber } from 'class-validator';

export class NumbersDTO {
  readonly numbers: number[];

  @IsString()
  readonly operation: string;
}
