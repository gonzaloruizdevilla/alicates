let assert = require('chai').assert;

import {identity, times} from '../../src/index.es6';

describe('times', () => {
  it('takes a map func', () => {
    assert.deepEqual(times(identity, 5), [0, 1, 2, 3, 4]);
    assert.deepEqual(times(function(x) {
      return x * 2;
    }, 5), [0, 2, 4, 6, 8]);
  });

  it('is curried', () => {
    var mapid = times(identity);
    assert.deepEqual(mapid(5), [0, 1, 2, 3, 4]);
  });

  it('throws if second argument is not a valid array length', () => {
    assert.throws(function() { times(3)('cheers!'); }, RangeError);
    assert.throws(function() { times(identity, -1); }, RangeError);
  });
});
