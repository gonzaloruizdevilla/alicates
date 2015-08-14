let assert = require('chai').assert;

import {identical, mathMod} from '../../src/index.es6';

describe('mathMod', function() {
  it('requires integer arguments', function() {
    assert.notStrictEqual(mathMod('s', 3), mathMod('s', 3));
    assert.notStrictEqual(mathMod(3, 's'), mathMod(3, 's'));
    assert.notStrictEqual(mathMod(12.2, 3), mathMod(12.2, 3));
    assert.notStrictEqual(mathMod(3, 12.2), mathMod(3, 12.2));
  });

  it('behaves differently than JS modulo', function() {
    assert.notStrictEqual(mathMod(-17, 5), -17 % 5);
    assert.notStrictEqual(mathMod(17.2, 5), 17.2 % 5);
    assert.notStrictEqual(mathMod(17, -5), 17 % -5);
  });

  it('computes the true modulo function', function() {
    assert.strictEqual(mathMod(-17, 5), 3);
    assert.strictEqual(identical(NaN, mathMod(17, -5)), true);
    assert.strictEqual(identical(NaN, mathMod(17, 0)), true);
    assert.strictEqual(identical(NaN, mathMod(17.2, 5)), true);
    assert.strictEqual(identical(NaN, mathMod(17, 5.5)), true);
  });

  it('is curried', function() {
    var f = mathMod(29);
    assert.strictEqual(f(6), 5);
  });

/*
  it('behaves right curried when passed `__` for its first argument', function() {
    var mod5 = modulo(R.__, 5);
    assert.strictEqual(mod5(12), 2);
    assert.strictEqual(mod5(8), 3);
  });
  */
});
