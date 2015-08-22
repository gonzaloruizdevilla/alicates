let assert = require('chai').assert;

import {all} from '../../src/index.es6';

describe('all', () => {
  const pred = a => a > 2;
  it('should return true if and only if all the values match the predicate', () => {
    assert.notOk(all(pred, [1,2,3]));
    assert.ok(all(pred, [3,3,3]));
  });

  it('should return true on an empty list', () => {
    assert.ok(all(pred, []));
  });

  it('should be curried', () => {
    assert.ok(all(pred)([3,3,3]));
  });
});
