'use strict';

const isPlainObj = require('is-plain-obj');
const postcss = require('postcss');
const postcssrc = require('postcss-load-config');

it('should export an object', () => {
  const config = require('../index');
  expect(isPlainObj(config)).toBe(true);
});

it('should not contain invalid queries', () => {
  return postcssrc({}, '__tests__/fixtures')
    .then((config) => {
      return postcss(config.plugins)
        .process('a { font-weight: 500; }\n', config.options)
        .then((result) => {
          expect(result).toBeTruthy();
        });
    });
});
