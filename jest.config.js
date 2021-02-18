const { defaults } = require('jest-config')

module.exports = {
  verbose: true,
  preset: 'ts-jest',
  testMatch: [
    '**/src/**/*.test.js'
  ],
  moduleFileExtensions: [...defaults.moduleFileExtensions,
    'js', 'ts', 'vue'
  ],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.vue$': 'vue-jest'
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1' // map @ to src
  }
}
