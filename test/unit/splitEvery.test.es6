let assert = require('chai').assert;

import {splitEvery} from '../../src/index.es6';

describe('splitEvery', () => {

  it('splits a collection into slices of the specified length', function() {
    assert.deepEqual(splitEvery(1, [1, 2, 3, 4]), [[1], [2], [3], [4]]);
    assert.deepEqual(splitEvery(2, [1, 2, 3, 4]), [[1, 2], [3, 4]]);
    assert.deepEqual(splitEvery(3, [1, 2, 3, 4]), [[1, 2, 3], [4]]);
    assert.deepEqual(splitEvery(4, [1, 2, 3, 4]), [[1, 2, 3, 4]]);
    assert.deepEqual(splitEvery(5, [1, 2, 3, 4]), [[1, 2, 3, 4]]);
    assert.deepEqual(splitEvery(3, []), []);
    assert.deepEqual(splitEvery(1, 'abcd'), ['a', 'b', 'c', 'd']);
    assert.deepEqual(splitEvery(2, 'abcd'), ['ab', 'cd']);
    assert.deepEqual(splitEvery(3, 'abcd'), ['abc', 'd']);
    assert.deepEqual(splitEvery(4, 'abcd'), ['abcd']);
    assert.deepEqual(splitEvery(5, 'abcd'), ['abcd']);
    assert.deepEqual(splitEvery(3, ''), []);
  });

  it('throws if first argument is not positive', function() {

    assert.throws(function() { splitEvery(0, []); }, Error, 'First argument to splitEvery must be a positive integer');
    assert.throws(function() { splitEvery(0, ''); }, Error, 'First argument to splitEvery must be a positive integer');
    assert.throws(function() { splitEvery(-1, []); }, Error, 'First argument to splitEvery must be a positive integer');
    assert.throws(function() { splitEvery(-1, ''); }, Error, 'First argument to splitEvery must be a positive integer');
  });

  it('is curried', function() {
    assert.deepEqual(splitEvery(1)([1, 2, 3, 4]), [[1], [2], [3], [4]]);
  })

});
