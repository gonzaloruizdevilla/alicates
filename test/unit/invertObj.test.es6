let assert = require('chai').assert;

import {invertObj} from '../../src/index.es6';

describe('invertObj', () => {

  it('takes a list or object and returns an object', () => {
    assert.equal(typeof invertObj([]), 'object');
    assert.equal(typeof invertObj({}), 'object');
  });

  it('returns an empty object when applied to a primitive', () => {
    assert.deepEqual(invertObj(42), {});
    assert.deepEqual(invertObj('abc'), {});
  });

  it('returns an empty object when applied to null/undefined', () => {
    assert.deepEqual(invertObj(null), {});
    assert.deepEqual(invertObj(undefined), {});
  });

  it('returns the input\'s values as keys, and keys as values', () => {
    assert.deepEqual(invertObj(['a', 'b', 'c']),       {a: '0', b: '1', c: '2'});
    assert.deepEqual(invertObj({x: 'a', y: 'b', z: 'c'}), {a: 'x', b: 'y', c: 'z'});
  });

  it('prefers the last key found when handling keys with the same value', () => {
    assert.deepEqual(invertObj(['a', 'b', 'a']), {a: '2', b: '1'});
    assert.deepEqual(invertObj({x: 'a', y: 'b', z: 'a', _id: 'a'}), {a: '_id', b: 'y'});
  });

  // this one is more of a sanity check
  it('is not destructive', () => {
    var input = {x: 'a', y: 'b', z: 'a', _id: 'a'};
    invertObj(input);
    assert.deepEqual(input, {x: 'a', y: 'b', z: 'a', _id: 'a'});
  });
});
