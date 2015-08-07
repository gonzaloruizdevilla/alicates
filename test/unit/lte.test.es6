let assert = require('chai').assert;

import {lte} from '../../src/index.es6';

describe('lte', function() {
  it('reports whether one item is less than another', function() {
    assert.strictEqual(lte(3, 5), true);
    assert.strictEqual(lte(6, 4), false);
    assert.strictEqual(lte(7.0, 7.0), true);
    assert.strictEqual(lte('abc', 'xyz'), true);
    assert.strictEqual(lte('abcd', 'abc'), false);
  });

  it('is curried', function() {
    var gte20 = lte(20);
    assert.strictEqual(gte20(10), false);
    assert.strictEqual(gte20(20), true);
    assert.strictEqual(gte20(25), true);
  });
/*
  it('behaves right curried when passed `__` for its first argument', function() {
    var upTo20 = lte(__, 20);
    assert.strictEqual(upTo20(10), true);
    assert.strictEqual(upTo20(20), true);
    assert.strictEqual(upTo20(25), false);
  });*/
});
