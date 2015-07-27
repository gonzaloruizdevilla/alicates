let assert = require('chai').assert;

import {bind, apply} from '../../src/index.es6';

describe('apply', () => {
  it('applies function to argument list', () => {
    assert.strictEqual(apply(Math.max, [1, 2, 3, -99, 42, 6, 7]), 42);
  });

  it('is curried', () => {
    assert.strictEqual(apply(Math.max)([1, 2, 3, -99, 42, 6, 7]), 42);
  });

  it('provides no way to specify context', function() {
    var obj = {method: function() { return this === obj; }};
    assert.strictEqual(apply(obj.method, []), false);
    assert.strictEqual(apply(bind(obj.method, obj), []), true);
  });
});
