'use strict';
let assert = require('chai').assert;

import {
  all,
  any,
  compose,
  curry,
  filter,
  map,
  reduce,
  reverse,
  sequence
} from '../../src/index.es6';


describe('curry', () => {
  it('should curry functions', () => {
    var curriedAdd = curry((a,b)=>a+b);
    assert.equal(curriedAdd(1)(2),3);
  });
});

describe('reduce', () => {
  it('should reduce arrays', () =>{
    const add =  (a,b) => a + b;
    const result = reduce(add, 0, [0,1,2]);
    assert.equal(result,3);
  });
});


describe('map', () => {
  it('should map arrays', () =>{
    const add2 =  a => a + 2;
    const result = map(add2, [0,1,2]);
    assert.deepEqual(result, [2,3,4]);
  });
});

describe('filter', () => {
  it('should filter arrays', () =>{
    const criteria =  a => a > 1;
    const result = filter(criteria, [0,1,2]);
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
});
