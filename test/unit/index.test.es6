let assert = require('chai').assert;
let module = require('../../');

describe('Entry Point', () => {
  it('Should properly export', () => {
    assert.isObject(module);
import {
  curry,
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

  });
});