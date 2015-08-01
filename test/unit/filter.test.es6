let assert = require('chai').assert;

import {filter} from '../../src/index.es6';

describe('filter', () => {
  const criteria =  a => a > 1;

  it('should filter arrays', () => {
    const result = filter(criteria, [0,1,2]);
    assert.deepEqual(result, [2]);
  });

  it('should be curried', () => {
    const result = filter(criteria)([0,1,2]);
    assert.deepEqual(result, [2]);
  });

  var even = function(x) {return x % 2 === 0;};

  it('reduces an array to those matching a filter', function() {
    assert.deepEqual(filter(even, [1, 2, 3, 4, 5]), [2, 4]);
  });

  it('returns an empty array if no element matches', function() {
    assert.deepEqual(filter(function(x) { return x > 100; }, [1, 9, 99]), []);
  });

  it('returns an empty array if asked to filter an empty array', function() {
    assert.deepEqual(filter(function(x) { return x > 100; }, []), []);
  });

  it('dispatches to passed-in non-Array object with a `filter` method', function() {
    var f = {filter: function(f) { return f('called f.filter'); }};
    assert.strictEqual(filter(function(s) { return s; }, f), 'called f.filter');
  });

  it('is curried', function() {
    var onlyEven = filter(even);
    assert.deepEqual(onlyEven([1, 2, 3, 4, 5, 6, 7]), [2, 4, 6]);
  });
});
