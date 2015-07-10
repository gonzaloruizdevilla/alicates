let assert = require('chai').assert;

import {curry, addAll} from '../../src/index.es6';

describe('curry', () => {
  it('should curry functions', () => {
    var curriedAdd = curry((a,b)=>a+b);
    assert.equal(curriedAdd(1)(2),3);
  });

  it('should allow to explicitly set the arity functions', () => {
    var curriedAddAllArity3 = curry(addAll, 3);
    assert.equal(curriedAddAllArity3(1)(2)(3), 6);
  });
});
