export interface LaptopInfo {
  getPrice(): number;
  getModel(): string;
}

export enum ModelLaptop {
  laptop = 'Laptop',
  macBook = 'Apple MacBook',
  asus = 'Asus ZN300'
}