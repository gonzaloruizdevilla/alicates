let assert = require('chai').assert;

import {curry, liftN, reduce} from '../../src/index.es6';


var addN = function () {
  return reduce(function(a, b) { return a + b; }, 0, arguments);
};
var add3 = curry(function add3(a, b, c) {
  return a + b + c;
});


describe('liftN', () => {

  var addN3 = liftN(3, addN);
  var addN4 = liftN(4, addN);
  var addN5 = liftN(5, addN);

  it('returns a function', () => {
    assert.strictEqual(typeof liftN(3, add3), 'function');
  });

  it('limits a variadic function to the specified arity', () => {
    assert.deepEqual(addN3([1, 10], [2], [3]), [6, 15]);
  });

  it('produces a cross-product of array values', () => {
    assert.deepEqual(addN3([1, 2, 3], [1, 2], [1, 2, 3]), [3, 4, 5, 4, 5, 6, 4, 5, 6, 5, 6, 7, 5, 6, 7, 6, 7, 8]);
    assert.deepEqual(addN3([1], [2], [3]), [6]);
    assert.deepEqual(addN3([1, 2], [3, 4], [5, 6]), [9, 10, 10, 11, 10, 11, 11, 12]);
  });

  it('can lift functions of any arity', () => {
    assert.deepEqual(addN3([1, 10], [2], [3]), [6, 15]);
    assert.deepEqual(addN4([1, 10], [2], [3], [40]), [46, 55]);
    assert.deepEqual(addN5([1, 10], [2], [3], [40], [500, 1000]), [546, 1046, 555, 1055]);
  });

  it('is curried', () => {
    var f4 = liftN(4);
    assert.strictEqual(typeof f4, 'function');
    assert.deepEqual(f4(addN)([1], [2], [3], [4, 5]), [10, 11]);
  });

/*
  it('works with other functors such as "Maybe"', () => {
    var addM = liftN(2, add);
    assert.deepEqual(addM(Maybe(3), Maybe(5)), Maybe(8));
  });
*/
});
