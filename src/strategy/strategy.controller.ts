import { Controller, Get, HttpCode, HttpStatus, Body } from '@nestjs/common';
import {
  StrategyService,
  StrategyDivide,
  StrategyMinus,
  StrategyMultiplying,
  StrategySummary
} from './strategy.service';
import { NumbersDTO } from './interface/strategy.dto';
import { mathSign } from './interface/strategy.interface';

@Controller('strategy')
export class StrategyController {

  @Get()
  @HttpCode(HttpStatus.OK)
  mathOperation(@Body() NumbersDTO: NumbersDTO): number {
    let operation;

    switch (NumbersDTO.operation) {
    case mathSign.summary:
      operation = new StrategyService(new StrategySummary);
      break;
    case mathSign.minus:
      operation = new StrategyService(new StrategyMinus);
      break;
    case mathSign.divivde:
      operation = new StrategyService(new StrategyDivide);
      break;
    case mathSign.multiplying:
      operation = new StrategyService(new StrategyMultiplying);
      break;
    default:
      operation = new StrategyService(new StrategySummary);
    }

    return operation.calculator(NumbersDTO.numbers);
  }
}