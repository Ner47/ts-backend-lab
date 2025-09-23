import { sleep } from './sleep';

describe('sleep', () => {
  test('resolves after ~10ms', async () => {
    const start = Date.now();
    await sleep(10);
    expect(Date.now() - start).toBeGreaterThanOrEqual(9);
  });
});
