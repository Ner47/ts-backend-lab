import { parseJson } from './parseJson';

describe('parseJson', () => {
  test('parses valid JSON', () => {
    expect(parseJson<{ a: number }>('{"a":1}')).toEqual({ a: 1 });
  });

  test('throws on invalid JSON', () => {
    expect(() => parseJson('not-json')).toThrow('Invalid JSON');
  });
});
