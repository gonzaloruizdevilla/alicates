let assert = require('chai').assert;

import {dropRepeats, into, equals} from '../../src/index.es6';

describe('dropRepeats', () => {
  var objs = [1, 2, 3, 4, 5, 3, 2];
  var objs2 = [1, 2, 2, 2, 3, 4, 4, 5, 5, 3, 2, 2];

  it('removes repeated elements', () => {
    assert.deepEqual(dropRepeats(objs2), objs);
    assert.deepEqual(dropRepeats(objs), objs);
  });

  it('returns an empty array for an empty array', () => {
    assert.deepEqual(dropRepeats([]), []);
  });

  it('can act as a transducer', () => {
    assert.deepEqual(into([], dropRepeats, objs2), objs);
  });

  it('has equals semantics', () => {
    function Just(x) { this.value = x; }
    Just.prototype.equals = function(x) {
      return x instanceof Just && equals(x.value, this.value);
    };

    assert.strictEqual(dropRepeats([0, -0]).length, 2);
    assert.strictEqual(dropRepeats([-0, 0]).length, 2);
    assert.strictEqual(dropRepeats([NaN, NaN]).length, 1);
    assert.strictEqual(dropRepeats([new Just([42]), new Just([42])]).length, 1);
  });
});
