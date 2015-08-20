let assert = require('chai').assert;

import {both} from '../../src/index.es6';

describe('both', () => {
  it('combines two boolean-returning functions into one', () => {
    var even = function(x) {return x % 2 === 0;};
    var gt10 = function(x) {return x > 10;};
    var f = both(even, gt10);
    assert.strictEqual(f(8), false);
    assert.strictEqual(f(13), false);
    assert.strictEqual(f(14), true);
  });

  it('accepts functions that take multiple parameters', () => {
    var between = function(a, b, c) {return a < b && b < c;};
    var total20 = function(a, b, c) {return a + b + c === 20;};
    var f = both(between, total20);
    assert.strictEqual(f(4, 5, 11), true);
    assert.strictEqual(f(12, 2, 6), false);
    assert.strictEqual(f(5, 6, 15), false);
  });

  it('does not evaluate the second expression if the first one is false', () => {
    var F = () => false ;
    var Z = () => { effect = 'Z got evaluated'; };
    var effect = 'not evaluated';
    both(F, Z);
    assert.strictEqual(effect, 'not evaluated');
  });

  it('is curried', () => {
    var even = function(x) {return x % 2 === 0;};
    var gt10 = function(x) {return x > 10;};
    var evenAnd = both(even);
    assert.strictEqual(typeof evenAnd(gt10), 'function');
    assert.strictEqual(evenAnd(gt10)(11), false);
    assert.strictEqual(evenAnd(gt10)(12), true);
  });
});
