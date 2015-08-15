let assert = require('chai').assert;

import {equals, isSet} from '../../src/index.es6';

describe('isSet', function() {
  it('returns true if a list is composed of unique elements', function() {
    var list = [1, 2, 3, 1, 2, 3, 1, 2, 3];
    assert.strictEqual(isSet(list), false);
    assert.strictEqual(isSet([3, 1, 4, 2, 5, 7, 9]), true);
  });

  it('returns true for an empty array', function() {
    assert.strictEqual(isSet([]), true);
  });

  it('has equals semantics', function() {
    function Just(x) { this.value = x; }
    Just.prototype.equals = function(x) {
      return x instanceof Just && equals(x.value, this.value);
    };

    assert.strictEqual(isSet([0, -0]), true);
    assert.strictEqual(isSet([-0, 0]), true);
    assert.strictEqual(isSet([NaN, NaN]), false);
    assert.strictEqual(isSet([new Just([42]), new Just([42])]), false);
  });

});
