module.exports = {
  'extends': [
    'eslint-config-jemsoft/rules/best-practices',
    'eslint-config-jemsoft/rules/errors',
    'eslint-config-jemsoft/rules/legacy',
    'eslint-config-jemsoft/rules/node',
    'eslint-config-jemsoft/rules/strict',
    'eslint-config-jemsoft/rules/style',
    'eslint-config-jemsoft/rules/variables'
  ],
  'env': {
    'browser': true,
    'node': true,
    'amd': false,
    'mocha': false,
    'jasmine': false
  },
  'ecmaFeatures': {},
  'globals': {},
  'rules': {}
};
