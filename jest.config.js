// eslint-disable-next-line no-undef
module.exports = {
  testEnvironment: 'node',
	preset: 'ts-jest',
  transform: {
    '^.+\\.tsx?$': '@sucrase/jest-plugin',
  },
  testPathIgnorePatterns: ['/node_modules/', '/dist/', '/types/'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
}