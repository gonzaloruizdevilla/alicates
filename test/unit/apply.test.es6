let assert = require('chai').assert;

import {add,apply} from '../../src/index.es6';

describe('apply', () => {
  const mult10 = x => x * 10;
  const add3 = add(3);

  it('should apply a list of functions to a list of values', function() {
    assert.deepEqual(apply([mult10, add3], [1, 2, 3]), [10, 20, 30, 4, 5, 6]);
  });
});
