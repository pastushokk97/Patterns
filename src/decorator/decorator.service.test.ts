// Unit tests
import { Laptop, Asus, CPU, MacBook, RAM } from './decorator.service';
import { ModelLaptop } from './decorator.interface';

describe('Decorator', () => {
  it('should create new default laptop', () => {
    const laptop = new Laptop();
    const price = laptop.getPrice();
    const model = laptop.getModel();

    expect(price).toStrictEqual(5000);
    expect(model).toStrictEqual(ModelLaptop.laptop);
  });
  it('should create MacBook laptop', () => {
    const MAC = new MacBook();
    const price = MAC.getPrice();
    const model = MAC.getModel();

    expect(price).toStrictEqual(10000);
    expect(model).toStrictEqual(ModelLaptop.macBook);
  });
  it('should create Asus laptop', () => {
    const asus = new Asus();
    const price = asus.getPrice();
    const model = asus.getModel();

    expect(price).toStrictEqual(8000);
    expect(model).toStrictEqual(ModelLaptop.asus);
  });
  it('should create macBook with RAM', () => {
    let MAC = new MacBook();
    MAC = new RAM(MAC);

    const price = MAC.getPrice();
    const model = MAC.getModel();

    expect(price).toStrictEqual(13000);
    expect(model).toStrictEqual(`${ModelLaptop.macBook} has a RAM`);
  });
  it('should create Asus with RAM', () => {
    let ASUS = new Asus();
    ASUS = new RAM(ASUS);

    const price = ASUS.getPrice();
    const model = ASUS.getModel();

    expect(price).toStrictEqual(11000);
    expect(model).toStrictEqual(`${ModelLaptop.asus} has a RAM`);
  });
  it('should create macBook with CPU', () => {
    let MAC = new MacBook();
    MAC = new CPU(MAC);

    const price = MAC.getPrice();
    const model = MAC.getModel();

    expect(price).toStrictEqual(11000);
    expect(model).toStrictEqual(`${ModelLaptop.macBook} has a CPU`);
  });
  it('should create Asus with CPU', () => {
    let ASUS = new Asus();
    ASUS = new CPU(ASUS);

    const price = ASUS.getPrice();
    const model = ASUS.getModel();

    expect(price).toStrictEqual(9000);
    expect(model).toStrictEqual(`${ModelLaptop.asus} has a CPU`);
  });
  it('should create MacBook with CPU and RAM', () => {
    let MAC = new MacBook();
    MAC = new CPU(MAC);
    MAC = new RAM(MAC);

    const price = MAC.getPrice();

    expect(price).toStrictEqual(14000);
  });
  it('should create Asus with RAM and CPU', () => {
    let ASUS = new Asus();
    ASUS = new RAM(ASUS);
    ASUS = new CPU(ASUS);

    const price = ASUS.getPrice();

    expect(price).toStrictEqual(12000);
  });
});
