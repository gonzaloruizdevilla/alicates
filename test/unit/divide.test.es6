let assert = require('chai').assert;

import {divide} from '../../src/index.es6';

describe('divide', function() {
  it('divides two numbers', function() {
    assert.strictEqual(divide(28, 7), 4);
  });

  it('is curried', function() {
    var into28 = divide(28);
    assert.strictEqual(into28(7), 4);
  });
/*
  it('behaves right curried when passed `__` for its first argument', function() {
    var half = divide(__, 2);
    assert.strictEqual(half(40), 20);
  });*/
});
