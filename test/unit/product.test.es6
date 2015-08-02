let assert = require('chai').assert;

import {product} from '../../src/index.es6';

describe('product', function() {
  it('multiplies together the array of numbers supplied', function() {
    assert.strictEqual(product([1, 2, 3, 4]), 24);
  });
});
