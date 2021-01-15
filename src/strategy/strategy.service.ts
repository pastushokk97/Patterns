import { Strategy } from "./interface/strategy.interface"
export class StrategyService {

  private strategy: Strategy;

  constructor(strategy: Strategy) {
    this.strategy = strategy;
  }

  public setStrategy(strategy: Strategy) {
    this.strategy = strategy;
  }

  public calculator(numbers: number[]): number {
    return this.strategy.doAlgorithm(numbers);
  }
}

export class StrategySummary implements Strategy {
  public doAlgorithm(numbers: number[]): number {
    return numbers.reduce((a: number, b: number) => a + b, 0);
  }
}

export class StrategyMinus implements Strategy {
  public doAlgorithm(numbers: number[]): number {
    return numbers.reduce((a: number, b: number) => a - b, 0);
  }
}

export class StrategyDivide implements Strategy {
  public doAlgorithm(numbers: number[]): number {
    return numbers.reduce((a: number, b: number) => a + b, 0);
  }
}

export class StrategyMultiplying implements Strategy {
  public doAlgorithm(numbers: number[]): number {
    return numbers.reduce((a: number, b: number) => a * b, 1);
  }
}