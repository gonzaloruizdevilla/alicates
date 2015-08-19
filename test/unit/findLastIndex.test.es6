let assert = require('chai').assert;

import {findLastIndex, into} from '../../src/index.es6';

describe('findLastIndex', () => {
  let obj1 = {x: 100};
  let obj2 = {x: 200};
  let a = [11, 10, 9, 'cow', obj1, 8, 7, 100, 200, 300, obj2, 4, 3, 2, 1, 0];
  let even = x => x % 2 === 0;
  let gt100 = x => x > 100;
  let isStr = x => typeof x === 'string';
  let xGt100 = o => o && o.x > 100;

  it('returns the index of the last element that satisfies the predicate', () => {
    assert.strictEqual(findLastIndex(even, a), 15);
    assert.strictEqual(findLastIndex(gt100, a), 9);
    assert.strictEqual(findLastIndex(isStr, a), 3);
    assert.strictEqual(findLastIndex(xGt100, a), 10);
  });

  it('returns -1 when no element satisfies the predicate', () => {
    assert.strictEqual(findLastIndex(even, ['zing']), -1);
  });

  it('returns the index of the last element into an array that satisfies the predicate', () => {
    assert.deepEqual(into([])(findLastIndex(even), a), [15]);
    assert.deepEqual(into([])(findLastIndex(gt100), a), [9]);
    assert.deepEqual(into([])(findLastIndex(isStr), a), [3]);
    assert.deepEqual(into([])(findLastIndex(xGt100), a), [10]);
  });

  it('returns -1 into an array when no element satisfies the predicate', () => {
    assert.deepEqual(into([])(findLastIndex(even), ['zing']), [-1]);
  });

  it('works when the first element matches', () => {
    assert.strictEqual(findLastIndex(even, [2, 3, 5]), 0);
  });

  it('does not go into an infinite loop on an empty array', () => {
    assert.strictEqual(findLastIndex(even, []), -1);
  });

  it('is curried', () => {
    assert.strictEqual(typeof findLastIndex(even), 'function');
    assert.strictEqual(findLastIndex(even)(a), 15);
  });
});
