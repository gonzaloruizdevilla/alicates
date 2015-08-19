let assert = require('chai').assert;

import {memoize, toString} from '../../src/index.es6';

describe('memoize', () => {

  it('calculates the value for a given input only once', () => {
    let ctr = 0;
    let fib = memoize(function(n) {ctr += 1; return n < 2 ? n : fib(n - 2) + fib(n - 1);});
    let result = fib(10);
    assert.strictEqual(result, 55);
    assert.strictEqual(ctr, 11); // fib(0), fib(1), ... fib(10), no memoization would take 177 iterations.
  });

  it('handles multiple parameters', () => {
    let f = memoize((a, b, c) => a + ', ' + b + c);
    assert.strictEqual(f('Hello', 'World' , '!'), 'Hello, World!');
    assert.strictEqual(f('Goodbye', 'Cruel World' , '!!!'), 'Goodbye, Cruel World!!!');
    assert.strictEqual(f('Hello', 'how are you' , '?'), 'Hello, how are you?');
    assert.strictEqual(f('Hello', 'World' , '!'), 'Hello, World!');
  });

  it('does not rely on reported arity', () => {
    let identity = memoize((...args) => args[0]);
    assert.strictEqual(identity('x'), 'x');
    assert.strictEqual(identity('y'), 'y');
  });

  it('memoizes "false" return values', () => {
    let count = 0;
    let inc = memoize((n) => (count += 1, n + 1));
    assert.strictEqual(inc(-1), 0);
    assert.strictEqual(inc(-1), 0);
    assert.strictEqual(inc(-1), 0);
    assert.strictEqual(count, 1);
  });

  it('can be applied to nullary function', () => {
    let count = 0;
    let f = memoize(() => (count += 1, 42));
    assert.strictEqual(f(), 42);
    assert.strictEqual(f(), 42);
    assert.strictEqual(f(), 42);
    assert.strictEqual(count, 1);
  });

  it('can be applied to function with optional arguments', () => {
    let count = 0;
    let f = memoize(function concat(a, b) {
      count += 1;
      /*eslint-disable no-fallthrough */
      switch (arguments.length) {
      case 0: a = 'foo';  // jshint ignore:line
      case 1: b = 'bar';
      }
      return a + b;
    });
    assert.strictEqual(f(), 'foobar');
    assert.strictEqual(f(), 'foobar');
    assert.strictEqual(f(), 'foobar');
    assert.strictEqual(count, 1);
  });

  it('differentiates values with same string representation', () => {
    let f = memoize(toString);
    assert.strictEqual(f(42), '42');
    assert.strictEqual(f('42'), '"42"');
    assert.strictEqual(f([[42]]), '[[42]]');
    assert.strictEqual(f([['42']]), '[["42"]]');
  });

  it('respects object equivalence', () => {
    let count = 0;
    let f = memoize(function(x) {
      count += 1;
      return toString(x);
    });
    assert.strictEqual(f({x: 1, y: 2}), '{"x": 1, "y": 2}');
    assert.strictEqual(f({x: 1, y: 2}), '{"x": 1, "y": 2}');
    assert.strictEqual(f({y: 2, x: 1}), '{"x": 1, "y": 2}');
    assert.strictEqual(count, 1);
  });
});
