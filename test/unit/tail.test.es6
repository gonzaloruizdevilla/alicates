let assert = require('chai').assert;

import {tail} from '../../src/index.es6';

describe('tail', () => {
  it('returns the tail of an ordered collection', function() {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
    assert.deepEqual(tail([2, 3]), [3]);
    assert.deepEqual(tail([3]), []);
    assert.deepEqual(tail([]), []);

    assert.strictEqual(tail('abc'), 'bc');
    assert.strictEqual(tail('bc'), 'c');
    assert.strictEqual(tail('c'), '');
    assert.strictEqual(tail(''), '');
  });

  it('throws if applied to null or undefined', function() {
    assert.throws(function() { tail(null); }, TypeError);
    assert.throws(function() { tail(undefined); }, TypeError);
  });
});
