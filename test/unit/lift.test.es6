let assert = require('chai').assert;

import {addAll, lift} from '../../src/index.es6';

describe('lift', () => {
  const add3 = (a,b,c) => a + b + c;
  const add4 = (a,b,c,d) => a + b + c + d;
  const add5 = (a,b,c,d,e) => a + b + c + d + e;

  it('returns a function', () => {
    assert.strictEqual(typeof lift(add3, 3), 'function');
  });

  it('limits a variadic function to the specified arity', () => {
    const liftedAdd3 = lift(add3);

    assert.deepEqual(liftedAdd3([1, 10], [2], [3]), [6, 15]);
  });

  it('produces a cross-product of array values', () => {
    const liftedAdd3 = lift(add3);

    assert.deepEqual(liftedAdd3([1, 2, 3], [1, 2], [1, 2, 3]), [3, 4, 5, 4, 5, 6, 4, 5, 6, 5, 6, 7, 5, 6, 7, 6, 7, 8]);
    assert.deepEqual(liftedAdd3([1], [2], [3]), [6]);
    assert.deepEqual(liftedAdd3([1, 2], [3, 4], [5, 6]), [9, 10, 10, 11, 10, 11, 11, 12]);
  });

  it('can lift functions of any arity', function() {
    const liftedAdd3 = lift(add3);
    const liftedAdd4 = lift(add4);
    const liftedAdd5 = lift(add5);

    assert.deepEqual(liftedAdd3([1, 10], [2], [3]), [6, 15]);
    assert.deepEqual(liftedAdd4([1, 10], [2], [3], [40]), [46, 55]);
    assert.deepEqual(liftedAdd5([1, 10], [2], [3], [40], [500, 1000]), [546, 1046, 555, 1055]);
  });

  it('can lift functions specifying arity', function() {
    const liftedAdd3 = lift(addAll, 3);
    const liftedAdd4 = lift(addAll, 4);
    const liftedAdd5 = lift(addAll, 5);

    assert.deepEqual(liftedAdd3([1, 10], [2], [3]), [6, 15]);
    assert.deepEqual(liftedAdd4([1, 10], [2], [3], [40]), [46, 55]);
    assert.deepEqual(liftedAdd5([1, 10], [2], [3], [40], [500, 1000]), [546, 1046, 555, 1055]);
  });
});
