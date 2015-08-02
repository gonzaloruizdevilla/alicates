let assert = require('chai').assert;

import {multiply} from '../../src/index.es6';

describe('multiply', function() {
  it('adds together two numbers', function() {
    assert.strictEqual(multiply(6, 7), 42);
  });

  it('is curried', function() {
    var dbl = multiply(2);
    assert.strictEqual(dbl(15), 30);
  });
});
