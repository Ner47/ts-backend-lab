import { greet } from './greetings';

test('greet logs and returns message', () => {
  const logger = jest.fn<void, [string]>();
  const msg = greet('TS', logger);
  expect(msg).toBe('Hello, TS!');
  expect(logger).toHaveBeenCalledTimes(1);
  expect(logger).toHaveBeenCalledWith('Hello, TS!');
});
