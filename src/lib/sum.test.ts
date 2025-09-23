import { sum } from './sum';

describe('sum', () => {
  test('adds 2 + 3 = 5', () => {
    expect(sum(2, 3)).toBe(5);
  });

  test('is pure and deterministic', () => {
    expect(sum(10, -10)).toBe(0);
    expect(sum(1, 1)).toBe(2);
  });
});
