let assert = require('chai').assert;

import {insertAll} from '../../src/index.es6';

describe('insertAll', () =>  {
  let list = ['a', 'b', 'c', 'd', 'e'];

  it('inserts a list of elements into the given list', () =>  {
    assert.deepEqual(insertAll(2, ['x', 'y', 'z'], list), ['a', 'b', 'x', 'y', 'z', 'c', 'd', 'e']);
  });

  it('appends to the end of the list if the index is too large', () =>  {
    assert.deepEqual(insertAll(8, ['p', 'q', 'r'], list), ['a', 'b', 'c', 'd', 'e', 'p', 'q', 'r']);
  });

  it('is curried', () =>  {
    assert.deepEqual(insertAll(8)(['p', 'q', 'r'], list), ['a', 'b', 'c', 'd', 'e', 'p', 'q', 'r']);
  });
});
