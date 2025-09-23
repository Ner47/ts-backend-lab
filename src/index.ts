import { sum } from './lib/sum.js';

export function main(): void {
  console.info('sum(2,3)=', sum(2, 3));
}

if (process.env.NODE_ENV !== 'test') {
  main();
}
