import { arrayMethods } from '../spyOn';

describe('Spy on', () => {
  let array;
  let spyMap;
  let spyForEach;
  beforeEach(() => {
    array = [1, 2, 3, 5, 8];
    spyMap = jest.spyOn(arrayMethods, 'map');
    spyForEach = jest.spyOn(arrayMethods, 'forEach');
  });

  it('should call callback', () => {
    const result = arrayMethods.map(array, (i => i * 2));

    expect(spyMap).toHaveBeenCalled();
    for (let i = 0; i < result.length; i++) {
      expect(result[i]).toStrictEqual(array[i] * 2);
    }
  });
});
