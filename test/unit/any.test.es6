let assert = require('chai').assert;

import {any, into, Nil, cons} from '../../src/index.es6';

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

  it('can act as a transformer', () => {
    assert.deepEqual(into([], any(pred), [3, 5, 7]), [true]);
    assert.deepEqual(into([], any(pred), [-3, -6, -2]), [false]);
    assert.deepEqual(into(Nil, any(pred), [3, 5, 7]), cons(true, Nil));
    assert.deepEqual(into(Nil, any(pred), [-3, -6, -2]), cons(false, Nil));
  });
});
