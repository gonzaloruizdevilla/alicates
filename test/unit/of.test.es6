let assert = require('chai').assert;

import {of} from '../../src/index.es6';

describe('of', function() {
  it('returns its argument as an Array', () => {
    assert.deepEqual(of(100), [100]);
    assert.deepEqual(of([100]), [[100]]);
    assert.deepEqual(of(null), [null]);
    assert.deepEqual(of(undefined), [undefined]);
    assert.deepEqual(of([]), [[]]);
  });
});
