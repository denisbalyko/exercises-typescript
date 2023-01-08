import isPlainObject from './index';

test('function', () => {
  expect(isPlainObject(3)).toBe(false);
  expect(isPlainObject('hexlet')).toBe(false);
  expect(isPlainObject({})).toBe(true);
  expect(isPlainObject([])).toBe(false);
  expect(isPlainObject(null)).toBe(false);
});
