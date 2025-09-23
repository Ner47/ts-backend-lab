export default {
  testEnvironment: 'node',
  testMatch: ['**/*.test.ts'],
  transform: {
    '^.+\\.(t|j)sx?$': [
      '@swc/jest',
      {
        jsc: {
          target: 'es2020',
          parser: { syntax: 'typescript', tsx: false, decorators: true },
        },
        module: { type: 'commonjs' },
      },
    ],
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts', '!src/**/index.ts'],
  coverageReporters: ['text', 'lcov'],
  coverageThreshold: {
    global: { lines: 80, statements: 80, branches: 70, functions: 80 },
  },
};
