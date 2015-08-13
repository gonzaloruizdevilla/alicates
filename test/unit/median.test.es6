let assert = require('chai').assert;

import {identical, median} from '../../src/index.es6';

describe('median', function() {

  it('returns middle value of an odd-length list', () => {
    assert.strictEqual(median([2]), 2);
    assert.strictEqual(median([2, 9, 7]), 7);
  });

  it('returns mean of two middle values of a nonempty even-length list', () => {
    assert.strictEqual(median([7, 2]), 4.5);
    assert.strictEqual(median([7, 2, 10, 9]), 8);
  });

  it('returns NaN for an empty list', () => {
    assert.strictEqual(identical(NaN, median([])), true);
  });

  it('handles array-like object', () => {
    assert.strictEqual(median((function() { return arguments; }(1, 2, 3))), 2);
  });

});
