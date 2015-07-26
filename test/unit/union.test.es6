let assert = require('chai').assert;

import {equals, union} from '../../src/index.es6';

describe('union', () => {
  var M = [1, 2, 3, 4];
  var N = [3, 4, 5, 6];
  it('combines two lists into the set of all their elements', () => {
    assert.deepEqual(union(M, N), [1, 2, 3, 4, 5, 6]);
  });

  it('is curried', () => {
    assert.strictEqual(typeof union(M), 'function');
    assert.deepEqual(union(M)(N), [1, 2, 3, 4, 5, 6]);
  });

  it('has equals semantics', () => {
    function Just(x) { this.value = x; }
    Just.prototype.equals = function(x) {
      return x instanceof Just && equals(x.value, this.value);
    };

    assert.strictEqual(union([0], [-0]).length, 2);
    assert.strictEqual(union([-0], [0]).length, 2);
    assert.strictEqual(union([NaN], [NaN]).length, 1);
    assert.strictEqual(union([new Just([42])], [new Just([42])]).length, 1);
  });
});
