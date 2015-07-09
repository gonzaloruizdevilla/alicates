'use strict';
let assert = require('chai').assert;

import {
  add,
  addAll,
  all,
  any,
  apply,
  compose,
  curry,
  filter,
  head,
  init,
  last,
  map,
  none,
  not,
  once,
  reduce,
  reduceRight,
  reverse,
  sequence,
  tail,
  zip
} from '../../src/index.es6';


describe('curry', () => {
  it('should curry functions', () => {
    var curriedAdd = curry((a,b)=>a+b);
    assert.equal(curriedAdd(1)(2),3);
  });

  it('should allow to explicitly set the arity functions', () => {
    var curriedAddAll = curry(addAll, 3);
    assert.equal(curriedAddAll(1)(2)(3), 6);
  });
});

describe('add', () => {
    it('should add two values', () =>{
      assert.equal(add(1,2), 3);
    });

    it('should be curried', () => {
      assert.equal(add(1)(2), 3);
    });
});


describe('addAll', () => {
    it('should add all the arguments', () =>{
      assert.equal(addAll(1,2,3), 6);
    });
});

describe('head', () => {
  it('should return the first element of an array', () => {
    assert.equal(head([1,2,3]), 1);
  });
});

describe('last', () => {
  it('should return the last element of an array', () => {
    assert.equal(last([1,2,3]), 3);
  });
});

describe('init', () => {
  it('should return all the elements of an array minus the last one', () => {
    assert.deepEqual(init([1,2,3]), [1,2]);
  });
});

describe('tail', () => {
  it('should return all the elements of an array minus the first one', () => {
    assert.deepEqual(tail([1,2,3]), [2,3]);
  });
});

describe('reduce', () => {
  const add =  (a,b) => a + b;
  it('should reduce arrays', () =>{
    assert.equal(reduce(add, 0, [0,1,2]), 3);
    assert.equal(reduce(add, '', ['0','1','2']), '012');
  });

  it('should be curried', () =>{
    let result = reduce(add)(0)([0,1,2]);
    assert.equal(result,3);
    result = reduce(add, 0)([0,1,2]);
    assert.equal(result,3);
    result = reduce(add)(0, [0,1,2]);
    assert.equal(result,3);
  });
});

describe('reduceRight', () => {
  const add =  (value, acc) => acc + value;

  it('should reduce arrays', () =>{
    const result = reduceRight(add, '', ['0','1','2']);
    assert.equal(result,'210');
  });

  it('should be curried', () =>{
    let result = reduceRight(add)('')(['0','1','2']);
    assert.equal(result,'210')
    result = reduceRight(add, '')(['0','1','2']);
    assert.equal(result,'210')
    result = reduceRight(add)('', ['0','1','2']);
    assert.equal(result,'210')
  });
});

describe('map', () => {
  const add2 =  a => a + 2;

  it('should map arrays', () =>{
    const result = map(add2, [0,1,2]);
    assert.deepEqual(result, [2,3,4]);
  });

  it('should be curried', () =>{
    const result = map(add2)([0,1,2]);
    assert.deepEqual(result, [2,3,4]);
  });
});

describe('filter', () => {
  const criteria =  a => a > 1;

  it('should filter arrays', () =>{
    const result = filter(criteria, [0,1,2]);
    assert.deepEqual(result, [2]);
  });

  it('should be curried', () =>{
    const result = filter(criteria)([0,1,2]);
    assert.deepEqual(result, [2]);
  });
});

describe('reverse', () => {
  it('should reverse arrays', () =>{
    const result = reverse([0,1,2]);
    assert.deepEqual(result, [2,1,0]);
  });
});

describe('sequence', () => {
  it('should create a function that executes a list in functions in sequence', () =>{
    const add3 = a => a + 3;
    const mult10 = a => a * 10;
    const seq = sequence(add3, mult10);
    const result = seq(2);
    assert.equal(result, 50);
  });
});

describe('compose', () => {
  it('should create a function that executes the composition of a list of functions', () =>{
    const add3 = a => a + 3;
    const mult10 = a => a * 10;
    const seq = compose(add3, mult10);
    const result = seq(2);
    assert.equal(result, 23);
  });
});

describe('all', () => {
  const pred = a => a > 2;
  it('should return true if and only if all the values match the predicate', () => {
    assert.notOk(all(pred, [1,2,3]));
    assert.ok(all(pred, [3,3,3]));
  });

  it('should return true on an empty list', () => {
    assert.ok(all(pred, []));
  });

  it('should be curried', () =>{
    assert.ok(all(pred)([3,3,3]));
  });
});

describe('any', () => {
  const pred = a => a > 2;

  it('should return true if any of the values match the predicate', () => {
    assert.notOk(any(pred, [1,1,1]));
    assert.ok(any(pred, [1,1,3]));
  });

  it('should return false on an empty list', () => {
    assert.notOk(any(pred, []));
  });

  it('should be curried', () =>{
      assert.ok(any(pred)([1,1,3]));
  });
});


describe('none', () => {
  const pred = a => a > 2;

  it('should return true if none of the values match the predicate', () => {
    assert.notOk(none(pred, [1,1,3]));
    assert.ok(none(pred, [1,1,1]));
  });

  it('should return true on an empty list', () => {
    assert.ok(none(pred, []));
  });

  it('should be curried', () =>{
      assert.ok(none(pred)([1,1,1]));
  });
});


describe('zip', () => {
  it('should zip two arrays', () => {
    assert.deepEqual(zip([1,2,3],[4,5,6]), [[1,4], [2,5], [3,6]] );
  });

  it('should zip two arrays stopping with the shortest one', () => {
    assert.deepEqual(zip([1,2,3,4],[4,5,6]), [[1,4], [2,5], [3,6]] );
    assert.deepEqual(zip([1,2,3],[4,5,6,7]), [[1,4], [2,5], [3,6]] );
  });

  it('should return an empty array for empty lists', () => {
    assert.deepEqual(zip([],[]), []);
  });

  it('should be curried', () =>{
      assert.deepEqual(zip([1,2,3])([4,5,6]), [[1,4], [2,5], [3,6]] );
  });
});

describe('apply', () => {
  const mult10 = x => x * 10;
  const add3 = add(3);

  it('should apply a list of functions to a list of values', function() {
    assert.deepEqual(apply([mult10, add3], [1, 2, 3]), [10, 20, 30, 4, 5, 6]);
  });
});

describe('not', () => {
  it('should returns the ! of its argument', () => {
    assert.equal(not(true), false);
    assert.equal(not(false), true);
    assert.equal(not(0), true);
    assert.equal(not(1), false);
  })
});


describe('once', () => {
  it('returns a function that calls the supplied function only once', () => {
    let fn;
    {
      let value = 0;
      fn = () => (value = value + 1);
    }
    let onceFn = once(fn);
    assert.equal(onceFn(), 1);
    assert.equal(onceFn(), 1);
    assert.equal(onceFn(), 1);
  });

  it('passes along arguments supplied', function() {
    let fn = once((a, b) => a + b);
    assert.strictEqual(fn(5, 10), 15);
  });

  it('retains and returns the first value calculated, even if different arguments are passed later', () => {
    var fn = once((a, b) => a + b);
    assert.strictEqual(fn(5, 10), 15);
    assert.strictEqual(fn(5, 20), 15);
  });
});
