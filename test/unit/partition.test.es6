let assert = require('chai').assert;

import {partition} from '../../src/index.es6';

describe('partition', () => {
  it('splits a list into two lists according to a predicate', () => {
    var pred = n => n % 2;
    assert.deepEqual(partition(pred, []), [[], []]);
    assert.deepEqual(partition(pred, [0, 2, 4, 6]), [[], [0, 2, 4, 6]]);
    assert.deepEqual(partition(pred, [1, 3, 5, 7]), [[1, 3, 5, 7], []]);
    assert.deepEqual(partition(pred, [0, 1, 2, 3]), [[1, 3], [0, 2]]);
  });

  it('is curried', () => {
    var polarize = partition(Boolean);
    assert.deepEqual(polarize([true, 0, 1, null]), [[true, 1], [0, null]]);
  });
});
