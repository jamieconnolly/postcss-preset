'use strict';

module.exports = {
  root: true,
  env: {
    'jest/globals': true,
    'node': true,
  },
  extends: [
    'eslint:recommended',
    'plugin:jest/recommended',
    'plugin:node/recommended',
  ],
  parserOptions: {
    sourceType: 'module',
  },
  plugins: [
    'jest',
    'node',
  ],
  rules: {
    'comma-dangle': ['error', 'always-multiline'],
    'indent': ['error', 2],
    'linebreak-style': 'error',
    'quote-props': ['error', 'consistent-as-needed'],
    'quotes': ['error', 'single', { avoidEscape: true }],
    'semi': ['error', 'always'],
    'sort-keys': 'error',
  },
};
