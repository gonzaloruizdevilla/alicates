let assert = require('chai').assert;

import {identity, equals, uniqBy} from '../../src/index.es6';

describe('uniqBy', () => {

  it('returns a set from any array based on predicate', () => {
    assert.deepEqual(uniqBy(Math.abs, [-2, -1, 0, 1, 2]), [-2, -1, 0]);
  });

  it('keeps elements from the left', () => {
    assert.deepEqual(uniqBy(Math.abs, [-1, 2, 4, 3, 1, 3]), [-1, 2, 4, 3]);
  });

  it('returns an empty array for an empty array', () => {
    assert.deepEqual(uniqBy(identity, []), []);
  });

  it('has equals semantics', () => {
    function Just(x) {
      this.value = x;
    }
    Just.prototype.equals = function(x) {
      return x instanceof Just && equals(x.value, this.value);
    };
    assert.strictEqual(uniqBy(identity, [-0, 0]).length, 2);
    assert.strictEqual(uniqBy(identity, [NaN, NaN]).length, 1);
    assert.strictEqual(uniqBy(identity, [new Just([1, 2, 3]), new Just([1, 2, 3])]).length, 1);
  });

});
