module.exports = {
  'moduleFileExtensions': [
    'js',
    'json',
    'ts'
  ],
  'rootDir': 'src',
  'testRegex': '.test.ts$',
  'transform': {
    '^.+\\.(t|j)s$': 'ts-jest'
  },
  'testEnvironment': 'node',
  'coverageDirectory': '../coverage',
  'coveragePathIgnorePatterns': [
    'node_modules',
    '<rootDir>/shared/typeorm.config.ts',
  ],
  'setupFiles': ['dotenv/config'],
  'coverageThreshold': {
    'global': {
      'branches': 80,
      'functions': 80,
      'lines': 80,
      'statements': 80
    }
  }
};