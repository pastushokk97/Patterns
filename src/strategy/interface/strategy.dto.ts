import { IsString, IsNumber } from 'class-validator';

export class NumbersDTO {
  @IsNumber()
  readonly numbers: number[];

  @IsString()
  readonly operation: string;
}
