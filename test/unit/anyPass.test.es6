let assert = require('chai').assert;

import {anyPass} from '../../src/index.es6';

describe('anyPass', () => {
  let odd = (n) => n % 2 !== 0;
  let gt20 = (n) => n > 20;
  let lt5 = (n) => n < 5;
  let plusEq = (w, x, y, z) =>  w + x  === y + z;

  it('reports whether any predicates are satisfied by a given value', () => {
    var ok = anyPass([odd, gt20, lt5]);
    assert.strictEqual(ok(7), true);
    assert.strictEqual(ok(9), true);
    assert.strictEqual(ok(10), false);
    assert.strictEqual(ok(18), false);
    assert.strictEqual(ok(3), true);
    assert.strictEqual(ok(22), true);
  });

  it('returns false for an empty predicate list', () => {
    assert.strictEqual(anyPass([])(3), false);
  });

  it('returns a curried function whose arity matches that of the highest-arity predicate', () => {
    assert.strictEqual(anyPass([odd, lt5, plusEq]).length, 4);
    assert.strictEqual(anyPass([odd, lt5, plusEq])(6, 7, 8, 9), false);
    assert.strictEqual(anyPass([odd, lt5, plusEq])(6)(7)(8)(9), false);
  });

});
