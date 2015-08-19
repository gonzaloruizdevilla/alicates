let assert = require('chai').assert;

import {range, unnest} from '../../src/index.es6';

describe('unnest', () => {

  it('only flattens one layer deep of a nested list', () => {
    var nest = [1, [2], [3, [4, 5], 6, [[[7], 8]]], 9, 10];
    assert.deepEqual(unnest(nest), [1, 2, 3, [4, 5], 6, [[[7], 8]], 9, 10]);
    nest = [[[[3]], 2, 1], 0, [[-1, -2], -3]];
    assert.deepEqual(unnest(nest), [[[3]], 2, 1, 0, [-1, -2], -3]);
    assert.deepEqual(unnest([1, 2, 3, 4, 5]), [1, 2, 3, 4, 5]);
  });

  it('is not destructive', () => {
    var nest = [1, [2], [3, [4, 5], 6, [[[7], 8]]], 9, 10];
    assert.notStrictEqual(unnest(nest), nest);
  });

  it('handles array-like objects', () => {
    var o = {length: 3, 0: [1, 2, [3]], 1: [], 2: ['a', 'b', 'c', ['d', 'e']]};
    assert.deepEqual(unnest(o), [1, 2, [3], 'a', 'b', 'c', ['d', 'e']]);
  });

  it('flattens an array of empty arrays', () => {
    assert.deepEqual(unnest([[], [], []]), []);
    assert.deepEqual(unnest([]), []);
  });

  it('handles ridiculously large inputs', () => {
    assert.strictEqual(unnest([new Array(1000000), range(0, 560000), 5, 1, 3]).length, 1560003);
  });
/*
  it('is equivalent to chain(identity)', () => {
    var Nothing = Maybe.Nothing;
    var Just = Maybe.Just;

    assert.strictEqual(toString(unnest(Nothing())), 'Nothing()');
    assert.strictEqual(toString(unnest(Just(Nothing()))), 'Nothing()');
    assert.strictEqual(toString(unnest(Just(Just(Nothing())))), 'Just(Nothing())');
    assert.strictEqual(toString(unnest(Just(Just(42)))), 'Just(42)');
    assert.strictEqual(toString(unnest(Just(Just(Just(42))))), 'Just(Just(42))');
  });
*/
});
