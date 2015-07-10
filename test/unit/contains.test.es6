let assert = require('chai').assert;

import {contains} from '../../src/index.es6';

describe('contains', () => {
  it('should true if array contains element', () => {
      assert.ok(contains(1, [1,2,3]));
      assert.notOk(contains(1, [2,3]));
  });

  it('should be curried', () => {
    var fn = contains(1);
      assert.ok(fn([1,2,3]));
      assert.notOk(fn([2,3]));
  });
});
