let assert = require('chai').assert;

import {minBy, prop} from '../../src/index.es6';

describe('minBy', function() {

  it('returns the smaller value as determined by the function', function() {
    assert.strictEqual(minBy(function(n) { return n * n; }, -3, 2), 2);
    assert.deepEqual(minBy(prop('x'), {x: 3, y: 1}, {x: 5, y: 10}), {x: 3, y: 1});
  });

});
