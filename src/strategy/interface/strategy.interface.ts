export interface Strategy {
  doAlgorithm(numbers: number[],): number;
}

export enum mathSign {
  summary = 'summary',
  minus = 'minus',
  divivde = 'divivde',
  multiplying = 'multiplying',
}
