'use strict';

const isPlainObj = require('is-plain-obj');
const postcss = require('postcss');
const postcssrc = require('postcss-load-config');

it('should export an object', () => {
  const config = require('../index');
  expect(isPlainObj(config)).toBe(true);
  expect(config.plugins).toBeTruthy();
});

it('should not contain invalid syntax', () => {
  return postcssrc({}, '__tests__/fixtures')
    .then((config) => {
      return postcss(config.plugins)
        .process('a { font-weight: 500; }\n', config.options)
        .then((result) => {
          expect(result).toBeTruthy();
        });
    });
});
