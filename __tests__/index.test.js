'use strict';

const isPlainObj = require('is-plain-obj');

it('should export an object', () => {
  const config = require('../index');

  expect(isPlainObj(config)).toBe(true);
});
