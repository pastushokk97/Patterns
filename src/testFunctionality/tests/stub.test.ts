import { map } from '../stub';

describe('Stubs', () => {
  let array;
  let callback;

  beforeEach(() => {
    array = [1, 2, 3, 5, 8];
    callback = jest.fn(element => element * 2);
  });

  it('should call callback', () => {
    map(array, callback);
    expect(callback).toBeCalled();
  });
});
