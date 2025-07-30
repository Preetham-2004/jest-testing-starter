import { add, multiply, divide } from '../src/utils/math.js';

describe('Math Utilities', () => {
  test('adds 2 + 3 = 5', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('multiplies 4 * 5 = 20', () => {
    expect(multiply(4, 5)).toBe(20);
  });

  test('divides 10 / 2 = 5', () => {
    expect(divide(10, 2)).toBe(5);
  });

  test('throws error on division by zero', () => {
    expect(() => divide(10, 0)).toThrow('Cannot divide by zero');
  });
});
