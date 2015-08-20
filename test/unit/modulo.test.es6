let assert = require('chai').assert;

import {modulo, __} from '../../src/index.es6';

describe('modulo', function() {
  it('divides the first param by the second and returns the remainder', function() {
    assert.strictEqual(modulo(100, 2), 0);
    assert.strictEqual(modulo(100, 3), 1);
    assert.strictEqual(modulo(100, 17), 15);
  });

  it('is curried', function() {
    var hundredMod = modulo(100);
    assert.strictEqual(typeof hundredMod, 'function');
    assert.strictEqual(hundredMod(2), 0);
    assert.strictEqual(hundredMod(3), 1);
    assert.strictEqual(hundredMod(17), 15);
  });


  it('behaves right curried when passed `__` for its first argument', function() {
    var isOdd = modulo(__, 2);
    assert.strictEqual(typeof isOdd, 'function');
    assert.strictEqual(isOdd(3), 1);
    assert.strictEqual(isOdd(198), 0);
  });


  it('preserves javascript-style modulo evaluation for negative numbers', function() {
    assert.strictEqual(modulo(-5, 4), -1);
  });
});
