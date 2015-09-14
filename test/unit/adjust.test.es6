let assert = require('chai').assert;

import {add, adjust, into} from '../../src/index.es6';


describe('adjust', () => {
  it('applies the given function to the value at the given index of the supplied array', () => {
    assert.deepEqual(adjust(add(1), 2, [0, 1, 2, 3]), [0, 1, 3, 3]);
  });

  it('offsets negative indexes from the end of the array', () => {
    assert.deepEqual(adjust(add(1), -3, [0, 1, 2, 3]), [0, 2, 2, 3]);
  });

  it('returns the original array if the supplied index is out of bounds', () => {
    var list = [0, 1, 2, 3];
    assert.deepEqual(adjust(add(1), 4, list), list);
    //assert.deepEqual(adjust(add(1), -5, list), list);
  });

  it('does not mutate the original array', () => {
    var list = [0, 1, 2, 3];
    assert.deepEqual(adjust(add(1), 2, list), [0, 1, 3, 3]);
    assert.deepEqual(list, [0, 1, 2, 3]);
  });

  it('curries the arguments', () => {
    assert.deepEqual(adjust(add(1))(2)([0, 1, 2, 3]), [0, 1, 3, 3]);
  });

  it('accepts an array-like object', () => {
    function args() {
      return arguments;
    }
    assert.deepEqual(adjust(add(1), 2, args(0, 1, 2, 3)), [0, 1, 3, 3]);
  });

  it('can act as a transducer', function() {
    assert.deepEqual(into([], adjust(add(1), 2), [0, 1, 2, 3]), [0, 1, 3, 3]);
    assert.deepEqual(into([], adjust(add(1), -3), [0, 1, 2, 3]), [0, 2, 2, 3]);
  });
});
