let assert = require('chai').assert;

import {call, bind} from '../../src/index.es6';

describe('call', () => {
  it('returns the result of calling its first argument with the remaining arguments', () => {
    assert.strictEqual(call(Math.max, 1, 2, 3, -99, 42, 6, 7), 42);
  });

  it('accepts one or more arguments', () => {
    var fn = function() { return arguments.length; };
    assert.strictEqual(call(fn), 0);
    assert.strictEqual(call(fn, 'x'), 1);
    assert.strictEqual(call(fn, 'x', 'y'), 2);
    assert.strictEqual(call(fn, 'x', 'y', 'z'), 3);
  });

  it('provides no way to specify context', () => {
    var obj = {method: function() { return this === obj; }};
    assert.strictEqual(call(obj.method), false);
    assert.strictEqual(call(bind(obj.method, obj)), true);
  });
});
