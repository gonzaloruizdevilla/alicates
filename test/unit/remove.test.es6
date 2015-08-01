let assert = require('chai').assert;

import {remove} from '../../src/index.es6';


describe('remove', () => {
  it('splices out a sub-list of the given list', () => {
    var list = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
    assert.deepEqual(remove(2, 5, list), ['a', 'b', 'h', 'i', 'j']);
  });

  it('returns the appropriate sublist when start == 0', () => {
    var list = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
    assert.deepEqual(remove(0, 5, list), ['f', 'g', 'h', 'i', 'j']);
    assert.deepEqual(remove(0, 1, list), ['b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']);
    assert.deepEqual(remove(0, list.length, list), []);
  });

  it('removes the end of the list if the count is too large', () => {
    var list = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
    assert.deepEqual(remove(2, 20, list), ['a', 'b']);
  });

  it('retains the entire list if the start is too large', () => {
    var list = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
    assert.deepEqual(remove(13, 3, list), ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']);
  });

  it('is curried', () => {
    var list = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
    assert.deepEqual(remove(13)(3)(list), ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']);
    assert.deepEqual(remove(13, 3)(list), ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']);
  });
});
