export function parseJson<T>(text: string): T {
  try {
    return JSON.parse(text) as T;
  } catch (e) {
    const err: Error & { cause?: unknown } = new Error('Invalid JSON');
    err.cause = e;
    throw err;
  }
}
