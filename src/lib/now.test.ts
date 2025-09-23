import * as Now from './now';

describe('nowISO', () => {
  test('uses system time (mocked)', () => {
    jest.useFakeTimers({ now: new Date('2099-01-01T00:00:00.000Z') });
    try {
      expect(Now.nowISO()).toBe('2099-01-01T00:00:00.000Z');
    } finally {
      jest.useRealTimers();
    }
  });
});
