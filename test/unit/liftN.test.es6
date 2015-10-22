let assert = require('chai').assert;

import {__, add, and, curry, gt, liftN, lt, multiply, reduce, subtract} from '../../src/index.es6';


var addN = function() {
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

  it('interprets [a] as a functor', () => {
    assert.deepEqual(addN3([1, 2, 3], [10, 20], [100, 200, 300]), [111, 211, 311, 121, 221, 321, 112, 212, 312, 122, 222, 322, 113, 213, 313, 123, 223, 323]);
    assert.deepEqual(addN3([1], [2], [3]), [6]);
    assert.deepEqual(addN3([1, 2], [10, 20], [100, 200]), [111, 211, 121, 221, 112, 212, 122, 222]);
  });

  it('interprets ((->) r) as a functor', () => {
    let convergedOnInt = addN3(add(2), multiply(3), subtract(4));
    let convergedOnBool = liftN(2, and)(gt(__, 0), lt(__, 3));
    assert.strictEqual(typeof convergedOnInt, 'function');
    assert.strictEqual(typeof convergedOnBool, 'function');
    assert.strictEqual(convergedOnInt(10), (10 + 2) + (10 * 3) + (4 - 10));
    // jscs:disable disallowYodaConditions
    assert.strictEqual(convergedOnBool(0), (0 > 0) && (0 < 3));
    assert.strictEqual(convergedOnBool(1), (1 > 0) && (1 < 3));
    assert.strictEqual(convergedOnBool(2), (2 > 0) && (2 < 3));
    assert.strictEqual(convergedOnBool(3), (3 > 0) && (3 < 3));
    // jscs:enable disallowYodaConditions
  });

  /*
    it('works with other functors such as "Maybe"', () => {
      var addM = liftN(2, add);
      assert.deepEqual(addM(Maybe(3), Maybe(5)), Maybe(8));
    });
  */
});
