let assert = require('chai').assert;

import {either} from '../../src/index.es6';

describe('either', () => {
  it('combines two boolean-returning functions into one', () => {
    let even = function(x) {return x % 2 === 0;};
    let gt10 = function(x) {return x > 10;};
    let f = either(even, gt10);
    assert.strictEqual(f(8), true);
    assert.strictEqual(f(13), true);
    assert.strictEqual(f(7), false);
  });

  it('accepts functions that take multiple parameters', () => {
    let between = function(a, b, c) {return a < b && b < c;};
    let total20 = function(a, b, c) {return a + b + c === 20;};
    let f = either(between, total20);
    assert.strictEqual(f(4, 5, 8), true);
    assert.strictEqual(f(12, 2, 6), true);
    assert.strictEqual(f(7, 5, 1), false);
  });

  it('does not evaluate the second expression if the first one is true', () => {
    let effect = 'not evaluated';
    let T = () => true;
    let Z = () => { effect = 'Z got evaluated'; };
    either(T, Z);
    assert.strictEqual(effect, 'not evaluated');
  });

  it('is curried', () => {
    let even = function(x) {return x % 2 === 0;};
    let gt10 = function(x) {return x > 10;};
    let evenOr = either(even);
    assert.strictEqual(typeof evenOr(gt10), 'function');
    assert.strictEqual(evenOr(gt10)(11), true);
    assert.strictEqual(evenOr(gt10)(9), false);
  });
});
