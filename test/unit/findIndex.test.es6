let assert = require('chai').assert;

import {findIndex, into} from '../../src/index.es6';

describe('findIndex', function() {
  let obj1 = {x: 100};
  let obj2 = {x: 200};
  let a = [11, 10, 9, 'cow', obj1, 8, 7, 100, 200, 300, obj2, 4, 3, 2, 1, 0];
  let even = x => x % 2 === 0;
  let gt100 = x => x > 100;
  let isStr = x => typeof x === 'string';
  let xGt100 = o => o && o.x > 100;


  it('returns the index of the first element that satisfies the predicate', function() {
    assert.strictEqual(findIndex(even, a), 1);
    assert.strictEqual(findIndex(gt100, a), 8);
    assert.strictEqual(findIndex(isStr, a), 3);
    assert.strictEqual(findIndex(xGt100, a), 10);
  });

  it('returns the index of the first element that satisfies the predicate into an array', function() {
    assert.deepEqual(into([])(findIndex(even), a), [1]);
    assert.deepEqual(into([])(findIndex(gt100), a), [8]);
    assert.deepEqual(into([])(findIndex(isStr), a), [3]);
    assert.deepEqual(into([])(findIndex(xGt100), a), [10]);
  });

  it('returns -1 when no element satisfies the predicate', function() {
    assert.strictEqual(findIndex(even, ['zing']), -1);
    assert.strictEqual(findIndex(even, []), -1);
  });

  it('returns -1 in array when no element satisfies the predicate into an array', function() {
    assert.deepEqual(into([])(findIndex(even), ['zing']), [-1]);
  });

  it('is curried', function() {
    assert.strictEqual(typeof findIndex(even), 'function');
    assert.strictEqual(findIndex(even)(a), 1);
  });
});
