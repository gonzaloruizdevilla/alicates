let assert = require('chai').assert;

import {repeat} from '../../src/index.es6';

describe('repeat', () => {
  it('returns a lazy list of identical values', () => {
    assert.deepEqual(repeat(0, 5), [0, 0, 0, 0, 0]);
  });

  it('can accept any value, including `null`', () => {
    assert.deepEqual(repeat(null, 3), [null, null, null]);
  });

  it('returns an empty array if given a negative number of times', () => {
    assert.deepEqual(repeat(0, -3), []);
  });

  it('is curried', () => {
    var makeFoos = repeat('foo');
    assert.deepEqual(makeFoos(0), []);
    assert.deepEqual(makeFoos(3), ['foo', 'foo', 'foo']);
  });
});
