let assert = require('chai').assert;

import {gte} from '../../src/index.es6';

describe('gte', function() {
  it('reports whether one item is less than another', function() {
    assert.strictEqual(gte(3, 5), false);
    assert.strictEqual(gte(6, 4), true);
    assert.strictEqual(gte(7.0, 7.0), true);
    assert.strictEqual(gte('abc', 'xyz'), false);
    assert.strictEqual(gte('abcd', 'abc'), true);
  });

  it('is curried', function() {
    var lte20 = gte(20);
    assert.strictEqual(lte20(10), true);
    assert.strictEqual(lte20(20), true);
    assert.strictEqual(lte20(25), false);
  });

/*
  it('behaves right curried when passed `__` for its first argument', function() {
    var gte20 = gte(__, 20);
    assert.strictEqual(gte20(10), false);
    assert.strictEqual(gte20(20), true);
    assert.strictEqual(gte20(25), true);
  });*/
});
