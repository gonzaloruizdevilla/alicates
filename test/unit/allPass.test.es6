let assert = require('chai').assert;

import {allPass} from '../../src/index.es6';

describe('allPass', () => {
  var odd = n => n % 2 !== 0;
  var lt20 = n => n < 20;
  var gt5 = n => n > 5;
  var plusEq = (w, x, y, z) => w + x  === y + z;

  it('reports whether all predicates are satisfied by a given value', () => {
      var ok = allPass([odd, lt20, gt5]);
      assert.strictEqual(ok(7), true);
      assert.strictEqual(ok(9), true);
      assert.strictEqual(ok(10), false);
      assert.strictEqual(ok(3), false);
      assert.strictEqual(ok(21), false);
    });

    it('returns true on empty predicate list', () => {
      assert.strictEqual(allPass([])(3), true);
    });

    it('returns a curried function whose arity matches that of the highest-arity predicate', () => {
      assert.strictEqual(allPass([odd, gt5, plusEq]).length, 4);
      assert.strictEqual(allPass([odd, gt5, plusEq])(9, 9, 9, 9), true);
      assert.strictEqual(allPass([odd, gt5, plusEq])(9)(9)(9)(9), true);
    });
});
