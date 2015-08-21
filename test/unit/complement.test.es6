let assert = require('chai').assert;

import {complement} from '../../src/index.es6';

describe('complement', () => {
  it('creates boolean-returning function that reverses another', () => {
    let even = function(x) {return x % 2 === 0;};
    let f = complement(even);
    assert.strictEqual(f(8), false);
    assert.strictEqual(f(13), true);
  });

  it('accepts a function that take multiple parameters', () => {
    let between = function(a, b, c) {return a < b && b < c;};
    let f = complement(between);
    assert.strictEqual(f(4, 5, 11), false);
    assert.strictEqual(f(12, 2, 6), true);
  });
});
