export default {
  testEnvironment: 'node',
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.js'],
  coverageDirectory: 'coverage',
  moduleFileExtensions: ['js'],
  testMatch: ['**/__tests__/**/*.test.js']
};
