let assert = require('chai').assert;
let module = require('../../');

describe('Entry Point', () => {
  it('Should properly export', () => {
    assert.isObject(module);
import {
  curry,
  map,
  reduce,
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

  });
});