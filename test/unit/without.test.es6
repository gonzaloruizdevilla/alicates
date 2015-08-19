let assert = require('chai').assert;

import {without} from '../../src/index.es6';

describe('without', () => {
  it('should return a new array without arguments', () => {
    assert.deepEqual(without([1,2,3,1,2,3,4], 2), [1,3,1,3,4]);
    assert.deepEqual(without([1,2,3,1,2,3,4], 2, 3), [1,1,4]);
  });

  it('should be curried with an arity of 2', () => {
    var fn = without([1,2,3,1,2,3,4]);
    assert.deepEqual(fn(2), [1,3,1,3,4]);
    assert.deepEqual(fn(2,3), [1,1,4]);
  });
});
