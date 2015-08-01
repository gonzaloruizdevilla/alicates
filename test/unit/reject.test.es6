let assert = require('chai').assert;

import {filter, t, f, reject} from '../../src/index.es6';

describe('reject', function() {
  var even = function(x) {return x % 2 === 0;};

  it('reduces an array to those not matching a filter', function() {
    assert.deepEqual(reject(even, [1, 2, 3, 4, 5]), [1, 3, 5]);
  });

  it('returns an empty array if no element matches', function() {
    assert.deepEqual(reject(function(x) { return x < 100; }, [1, 9, 99]), []);
  });

  it('returns an empty array if asked to filter an empty array', function() {
    assert.deepEqual(reject(function(x) { return x > 100; }, []), []);
  });

  it('returns an empty array if no element matches', function() {
    assert.deepEqual(reject(function(x) { return x < 100; }, [1, 9, 99]), []);
  });

  it('returns an empty array if asked to filter an empty array', function() {
    assert.deepEqual(reject(function(x) { return x > 100; }, []), []);
  });

  it('dispatches to `filter` method', function() {
    function Nothing() {}
    Nothing.value = new Nothing();
    Nothing.prototype.filter = function() {
      return this;
    };

    function Just(x) { this.value = x; }
    Just.prototype.filter = function(pred) {
      return pred(this.value) ? this : Nothing.value;
    };

    var m = new Just(42);
    assert.strictEqual(filter(t, m), m);
    assert.strictEqual(filter(f, m), Nothing.value);
    assert.strictEqual(reject(t, m), Nothing.value);
    assert.strictEqual(reject(f, m), m);
  });

  it('is curried', function() {
    var odd = reject(even);
    assert.deepEqual(odd([1, 2, 3, 4, 5, 6, 7]), [1, 3, 5, 7]);
  });
});
