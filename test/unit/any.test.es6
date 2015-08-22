let assert = require('chai').assert;

import {any} from '../../src/index.es6';

describe('any', () => {
  const pred = a => a > 2;

  it('should return true if any of the values match the predicate', () => {
    assert.notOk(any(pred, [1,1,1]));
    assert.ok(any(pred, [1,1,3]));
  });

  it('should return false on an empty list', () => {
    assert.notOk(any(pred, []));
  });

  it('should be curried', () => {
    assert.ok(any(pred)([1,1,3]));
  });
});
