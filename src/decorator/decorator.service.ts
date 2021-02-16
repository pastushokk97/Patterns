import { LaptopInfo, ModelLaptop } from './decorator.interface';

export class Laptop implements LaptopInfo {
  public price: number;
  public model: string;

  constructor() {
    this.price = 5000;
    this.model = ModelLaptop.laptop;
  }

  getPrice(): number {
    return this.price;
  }

  getModel(): string {
    return this.model;
  }
}

export class MacBook extends Laptop {
  public price: number;
  public model: string;

  constructor() {
    super();
    this.price = 10000;
    this.model = ModelLaptop.macBook;
  }
}

export class Asus extends Laptop {
  public price: number;
  public model: string;

  constructor() {
    super();
    this.price = 8000;
    this.model = ModelLaptop.asus;
  }
}

export class CPU implements LaptopInfo {
  protected laptop: Laptop;
  public price = 1000;
  public model = 'CPU';

  constructor(laptop) {
    this.laptop = laptop;
  }

  getPrice(): number {
    return this.laptop.getPrice() + this.price;
  }

  getModel(): string {
    return `${this.laptop.getModel()} has a ${this.model}`;
  }
}

export class RAM implements LaptopInfo {
  protected laptop: Laptop;
  public price = 3000;
  public model = 'RAM';

  constructor(laptop) {
    this.laptop = laptop;
  }

  getPrice(): number {
    return this.laptop.getPrice() + this.price;
  }

  getModel(): string {
    return `${this.laptop.getModel()} has a ${this.model}`;
  }
}
