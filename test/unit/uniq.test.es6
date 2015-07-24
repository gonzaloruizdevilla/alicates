let assert = require('chai').assert;

import {equals, uniq} from '../../src/index.es6';

describe('uniq', () => {
  it('returns a set from any array (i.e. purges duplicate elements)', () => {
    var list = [1, 2, 3, 1, 2, 3, 1, 2, 3];
    assert.deepEqual(uniq(list), [1, 2, 3]);
  });

  it('keeps elements from the left', () => {
    assert.deepEqual(uniq([1, 2, 3, 4, 1]), [1, 2, 3, 4]);
  });

  it('returns an empty array for an empty array', () => {
    assert.deepEqual(uniq([]), []);
  });

  it('has equals semantics', () => {
    function Just(x) { this.value = x; }
    Just.prototype.equals = function(x) {
      return x instanceof Just && equals(x.value, this.value);
    };

    assert.strictEqual(uniq([0, -0]).length, 2);
    assert.strictEqual(uniq([NaN, NaN]).length, 1);
    assert.strictEqual(uniq([[1], [1]]).length, 1);
    assert.strictEqual(uniq([new Just([42]), new Just([42])]).length, 1);
  });

  it('handles null and undefined elements', () => {
    assert.deepEqual(uniq([void 0, null, void 0, null]), [void 0, null]);
  });
});
