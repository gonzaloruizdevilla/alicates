let assert = require('chai').assert;

import {maxBy, prop} from '../../src/index.es6';

describe('maxBy', () => {

  it('returns the larger value as determined by the function', () => {
    assert.strictEqual(maxBy(n  => n * n, -3, 2), -3);
    assert.deepEqual(maxBy(prop('x'), {x: 3, y: 1}, {x: 5, y: 10}), {x: 5, y: 10});
  });

});
