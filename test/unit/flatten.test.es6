let assert = require('chai').assert;

import {flatten, range} from '../../src/index.es6';

describe('flatten', () => {
  it('turns a nested list into one flat list', () => {
    let nest = [1, [2], [3, [4, 5], 6, [[[7], 8]]], 9, 10];
    assert.deepEqual(flatten(nest), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    nest = [[[[3]], 2, 1], 0, [[-1, -2], -3]];
    assert.deepEqual(flatten(nest), [3, 2, 1, 0, -1, -2, -3]);
    assert.deepEqual(flatten([1, 2, 3, 4, 5]), [1, 2, 3, 4, 5]);
  });

  it('is not destructive', () => {
    let nest = [1, [2], [3, [4, 5], 6, [[[7], 8]]], 9, 10];
    assert.notStrictEqual(flatten(nest), nest);
  });

  it('handles ridiculously large inputs', () => {
    assert.strictEqual(flatten([new Array(1000000), range(0, 560), 5, 1, 3]).length, 1000563);
  });

  it('handles array-like objects', () => {
    let o = {length: 3, 0: [1, 2, [3]], 1: [], 2: ['a', 'b', 'c', ['d', 'e']]};
    assert.deepEqual(flatten(o), [1, 2, 3, 'a', 'b', 'c', 'd', 'e']);
  });

  it('flattens an array of empty arrays', () => {
    assert.deepEqual(flatten([[], [], []]), []);
    assert.deepEqual(flatten([]), []);
  });
});
