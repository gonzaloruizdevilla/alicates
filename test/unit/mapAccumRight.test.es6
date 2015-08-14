let assert = require('chai').assert;

import {concat, mapAccumRight} from '../../src/index.es6';

describe('mapAccumRight', () => {
  let add = (a, b) => [a + b, a + b];
  let mult = (a, b) => [a * b, a * b];

  it('map and accumulate simple functions over arrays with the supplied accumulator', () => {
    assert.deepEqual(mapAccumRight(add, 0, [1, 2, 3, 4]), [10, [10, 9, 7, 4]]);
    assert.deepEqual(mapAccumRight(mult, 1, [1, 2, 3, 4]), [24, [24, 24, 12, 4]]);
  });

  it('returns the list and accumulator for an empty array', () => {
    assert.deepEqual(mapAccumRight(add, 0, []), [0, []]);
    assert.deepEqual(mapAccumRight(mult, 1, []), [1, []]);
    assert.deepEqual(mapAccumRight(concat, [], []), [[], []]);
  });

  it('is curried', () => {
    let addOrConcat = mapAccumRight(add);
    let sum = addOrConcat(0);
    let cat = addOrConcat('');
    assert.deepEqual(sum([1, 2, 3, 4]), [10, [10, 9, 7, 4]]);
    assert.deepEqual(cat(['1', '2', '3', '4']), ['4321', ['4321', '432', '43', '4']]);
  });

  it('correctly reports the arity of curried versions', () => {
    let sum = mapAccumRight(add, 0);
    assert.strictEqual(sum.length, 1);
  });
});
