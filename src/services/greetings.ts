export function greet(name: string, log: (m: string) => void): string {
  const msg = `Hello, ${name}!`;
  log(msg);
  return msg;
}
