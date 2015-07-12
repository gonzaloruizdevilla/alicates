let assert = require('chai').assert;

import {lift} from '../../src/index.es6';

describe('lift', () => {
  let add3 = (a,b,c) => a + b + c;

  var addN3 = lift(add3);

  it('returns a function', () => {
    assert.strictEqual(typeof lift(add3, 3), 'function');
  });

  it('limits a variadic function to the specified arity', () => {
    assert.deepEqual(addN3([1, 10], [2], [3]), [6, 15]);
  });

  it('produces a cross-product of array values', () => {
    assert.deepEqual(addN3([1, 2, 3], [1, 2], [1, 2, 3]), [3, 4, 5, 4, 5, 6, 4, 5, 6, 5, 6, 7, 5, 6, 7, 6, 7, 8]);
    assert.deepEqual(addN3([1], [2], [3]), [6]);
    assert.deepEqual(addN3([1, 2], [3, 4], [5, 6]), [9, 10, 10, 11, 10, 11, 11, 12]);
  });
});
