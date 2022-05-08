export default {
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleNameMapper: {
    '\\.(gif|tff|eot|svg|png)$': '<rootDir>/__mocks__/fileMock.js',
  },
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['@testing-library/jest-dom', './jest.setup.ts'],
};
