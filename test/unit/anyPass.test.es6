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

  it('does not have to be curried', () => {
    assert.strictEqual(anyPass([odd, lt5], 3), true);
    assert.strictEqual(anyPass([odd, lt5], 22), false);
  });

  it('reports its arity as the longest predicate length', () => {
    assert.strictEqual(anyPass([odd, lt5, plusEq]).length, 4);
  });
});
