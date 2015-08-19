let assert = require('chai').assert;

import {findLast, into} from '../../src/index.es6';

describe('findLast', () => {
  let obj1 = {x: 100};
  let obj2 = {x: 200};
  let a = [11, 10, 9, 'cow', obj1, 8, 7, 100, 200, 300, obj2, 4, 3, 2, 1, 0];
  let even = x => x % 2 === 0;
  let gt100 = x => x > 100;
  let isStr = x => typeof x === 'string';
  let xGt100 = o => o && o.x > 100;


  it('returns the index of the last element that satisfies the predicate', () => {
    assert.strictEqual(findLast(even, a), 0);
    assert.strictEqual(findLast(gt100, a), 300);
    assert.strictEqual(findLast(isStr, a), 'cow');
    assert.strictEqual(findLast(xGt100, a), obj2);
  });

  it('returns the index of the last element that satisfies the predicate into an array', () => {
    assert.deepEqual(into([])(findLast(even), a), [0]);
    assert.deepEqual(into([])(findLast(gt100), a), [300]);
    assert.deepEqual(into([])(findLast(isStr), a), ['cow']);
    assert.deepEqual(into([])(findLast(xGt100), a), [obj2]);
  });

  it('returns `undefined` when no element satisfies the predicate', () => {
    assert.strictEqual(findLast(even, ['zing']), undefined);
  });

  it('returns `undefined` into an array when no element satisfies the predicate', () => {
    assert.deepEqual(into([])(findLast(even), ['zing']), [undefined]);
  });

  it('works when the first element matches', () => {
    assert.strictEqual(findLast(even, [2, 3, 5]), 2);
  });

  it('does not go into an infinite loop on an empty array', () => {
    assert.strictEqual(findLast(even, []), undefined);
  });

  it('is curried', () => {
    assert.strictEqual(typeof findLast(even), 'function');
    assert.strictEqual(findLast(even)(a), 0);
  });
});
