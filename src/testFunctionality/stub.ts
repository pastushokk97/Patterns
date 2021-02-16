export function map(array, callback) {
  const result = [];
  for (const element of array) {
    result.push(callback(element));
  }
  return result;
}

export function forEach(array, callback) {
  for (const element of array) {
    callback(element);
  }
  return array;
}
