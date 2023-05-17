/** @type {import('ts-jest').JestConfigWithTsJest} */
// eslint-disable-next-line no-undef
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['js', 'jsx', 'json', 'vue', 'ts', 'tsx'],
  testMatch: ['**/**/*.test.(js|jsx|ts|tsx)'],
  collectCoverage: true,
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
};
