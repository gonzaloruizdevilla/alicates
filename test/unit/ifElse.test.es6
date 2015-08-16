let assert = require('chai').assert;

import {add, gt, subtract, ifElse, map, inc, prop, identity, isArray} from '../../src/index.es6';

describe('ifElse', () => {

  let isNumber = a => typeof a === 'number';

  it('calls the truth case function if the validator returns a truthy value', () => {
    assert.strictEqual(ifElse(isNumber, inc, identity)(10), 11);
  });

  it('calls the false case function if the validator returns a falsey value', () => {
    assert.strictEqual(ifElse(isNumber, inc, identity)('hello'), 'hello');
  });

  it('calls the true case on array items and the false case on non array items', () => {
    let list = [[1, 2, 3, 4, 5], 10, [0, 1], 15];
    let arrayToLength = map(ifElse(isArray, prop('length'), identity));
    assert.deepEqual(arrayToLength(list), [5, 10, 2, 15]);
  });

  it('passes the arguments to the true case function', () => {
    var v = () => { return true; };
    var onTrue = function(a, b) {
      assert.strictEqual(a, 123);
      assert.strictEqual(b, 'abc');
    };
    ifElse(v, onTrue, identity)(123, 'abc');
  });

  it('passes the arguments to the false case function', () => {
    var v = () => { return false; };
    var onFalse = function(a, b) {
      assert.strictEqual(a, 123);
      assert.strictEqual(b, 'abc');
    };
    ifElse(v, identity, onFalse)(123, 'abc');
  });

  it('returns a function whose arity equals the max arity of the three arguments to `ifElse`', () => {
    function a0() { return 0; }
    function a1(x) { return x; }
    function a2(x, y) { return x + y; }

    assert.strictEqual(ifElse(a0, a1, a2).length, 2);
    assert.strictEqual(ifElse(a0, a2, a1).length, 2);
    assert.strictEqual(ifElse(a1, a0, a2).length, 2);
    assert.strictEqual(ifElse(a1, a2, a0).length, 2);
    assert.strictEqual(ifElse(a2, a0, a1).length, 2);
    assert.strictEqual(ifElse(a2, a1, a0).length, 2);
  });

  it('returns a curried function', () => {
    var v = function(a) { return typeof a === 'number'; };
    var ifIsNumber = ifElse(v);
    assert.strictEqual(ifIsNumber(inc, identity)(15), 16);
    assert.strictEqual(ifIsNumber(inc, identity)('hello'), 'hello');

    var fn = ifElse(gt, subtract, add);
    assert.strictEqual(fn(2)(7), 9);
    assert.strictEqual(fn(2, 7), 9);
    assert.strictEqual(fn(7)(2), 5);
    assert.strictEqual(fn(7, 2), 5);
  });
});
