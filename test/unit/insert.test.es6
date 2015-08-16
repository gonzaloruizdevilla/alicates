let assert = require('chai').assert;

import {insert} from '../../src/index.es6';

describe('insert', () => {
  let list = ['a', 'b', 'c', 'd', 'e'];

  it('inserts an element into the given list', () => {
    assert.deepEqual(insert(2, 'x', list), ['a', 'b', 'x', 'c', 'd', 'e']);
  });

  it('inserts another list as an element', () => {
    assert.deepEqual(insert(2, ['s', 't'], list), ['a', 'b', ['s', 't'], 'c', 'd', 'e']);
  });

  it('appends to the end of the list if the index is too large', () => {
    assert.deepEqual(insert(8, 'z', list), ['a', 'b', 'c', 'd', 'e', 'z']);
  });

  it('is curried', () => {
    assert.deepEqual(insert(8)('z')(list), ['a', 'b', 'c', 'd', 'e', 'z']);
    assert.deepEqual(insert(8, 'z')(list), ['a', 'b', 'c', 'd', 'e', 'z']);
  });
});
