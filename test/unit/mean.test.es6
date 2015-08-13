let assert = require('chai').assert;

import {mean, identical} from '../../src/index.es6';


describe('mean', function() {

  it('returns mean of a nonempty list', () => {
    assert.strictEqual(mean([2]), 2);
    assert.strictEqual(mean([2, 7]), 4.5);
    assert.strictEqual(mean([2, 7, 9]), 6);
    assert.strictEqual(mean([2, 7, 9, 10]), 7);
  });

  it('returns NaN for an empty list', () => {
    assert.strictEqual(identical(NaN, mean([])), true);
  });

  it('handles array-like object', () => {
    assert.strictEqual(mean((function() { return arguments; }(1, 2, 3))), 2);
  });

});
