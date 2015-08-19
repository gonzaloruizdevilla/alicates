let assert = require('chai').assert;

import {difference} from '../../src/index.es6';

describe('difference', () => {
  it('should return a new array difference arguments', () => {
    assert.deepEqual(difference([1,2,3,4,5,6], [1,2], [3,4]), [5,6]);
  });

  it('should be curried with an arity of 2', () => {
    var fn = difference([1,2,3,4,5,6]);
    assert.deepEqual(fn([1,2]), [3,4,5,6]);
    assert.deepEqual(fn([1,2], [3,4]), [5,6]);
  });
});
