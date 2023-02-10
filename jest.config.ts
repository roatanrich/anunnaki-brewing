module.exports = {
  roots: ['<rootDir>/src'],
    testEnvironment: 'node',
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90,
    },
  },
  collectCoverageFrom: ['src/**/*.(tsx|ts)'],
  collectCoverage: false
}
