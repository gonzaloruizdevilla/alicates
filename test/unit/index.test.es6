let assert = require('chai').assert;
let module = require('../../');

describe('Entry Point', () => {
  it('Should properly export', () => {
    assert.isObject(module);
import {
  curry,
} from '../../src/index.es6';
describe('curry', () => {
  it('should curry functions', () => {
    var curriedAdd = curry((a,b)=>a+b);
    assert.equal(curriedAdd(1)(2),3);
  });
});
  });
});