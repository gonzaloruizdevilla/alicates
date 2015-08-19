let assert = require('chai').assert;

import {nAry, range, repeat} from '../../src/index.es6';

describe('nAry', function() {

  it('turns multiple-argument function into a nullary one', () => {
    /* eslint-disable no-unused-vars */
    var fn = nAry(0, function (x, y, z){return [...arguments];});
    /* eslint-enable no-unused-vars */
    assert.strictEqual(fn.length, 0);
    assert.deepEqual(fn(1, 2, 3), []);
  });

  it('turns multiple-argument function into a ternary one', () => {
    /* eslint-disable no-unused-vars */
    var fn = nAry(3, function(a, b, c, d){return [...arguments];});
    /* eslint-enable no-unused-vars */
    assert.strictEqual(fn.length, 3);
    assert.deepEqual(fn(1, 2, 3, 4), [1, 2, 3]);
    assert.deepEqual(fn(1), [1, undefined, undefined]);
  });

  it('creates functions of arity less than or equal to ten', () => {
    var fn = nAry(10, function() {return [...arguments];});
    assert.strictEqual(fn.length, 10);
    assert.deepEqual(fn.apply(null, range(0, 25)), range(0, 10));

    var undefs = fn();
    var ns = repeat(undefined, 10);
    assert.strictEqual(undefs.length, ns.length);
    var idx = undefs.length - 1;
    while (idx >= 0) {
      assert.strictEqual(undefs[idx], ns[idx]);
      idx -= 1;
    }
  });

  it('throws if n is greater than ten', () => {
    assert.throws(
      () => nAry(11, () => void 0),
      Error,
      'First argument to nAry must be a non-negative integer no greater than ten'
    );
  });

});
