let assert = require('chai').assert;

import {intersection} from '../../src/index.es6';

describe('intersection', () => {
  it('should return a new array intersection arguments', () => {
      assert.deepEqual(intersection([1,2,3],[1,2,3,4],[1,2]), [1,2]);
  });

  it('should be curried with an arity of 2', () => {
    var fn = intersection([1,2,3]);
    assert.deepEqual(fn([1,2,3,4],[1,2]), [1,2]);
    assert.deepEqual(fn([1,2,3,4],[1,2]), [1,2]);
  });
});
