let assert = require('chai').assert;

import {__, curryN} from '../../src/index.es6';

describe('curryN', function() {
  function source(a, b, c, d) {
    void d;
    return a * b * c;
  }
  it('accepts an arity', function() {
    var curried = curryN(3, source);
    assert.strictEqual(curried(1)(2)(3), 6);
    assert.strictEqual(curried(1, 2)(3), 6);
    assert.strictEqual(curried(1)(2, 3), 6);
    assert.strictEqual(curried(1, 2, 3), 6);
  });

  it('can be partially applied', function() {
    var curry3 = curryN(3);
    var curried = curry3(source);
    assert.strictEqual(curried.length, 3);
    assert.strictEqual(curried(1)(2)(3), 6);
    assert.strictEqual(curried(1, 2)(3), 6);
    assert.strictEqual(curried(1)(2, 3), 6);
    assert.strictEqual(curried(1, 2, 3), 6);
  });

  it('preserves context', function() {
    var ctx = {x: 10};
    var f = function(a, b) { return a + b * this.x; };
    var g = curryN(2, f);

    assert.strictEqual(g.call(ctx, 2, 4), 42);
    assert.strictEqual(g.call(ctx, 2).call(ctx, 4), 42);
  });

  it('supports __ placeholder', function() {
    var f = function() { return Array.prototype.slice.call(arguments); };
    var g = curryN(3, f);
    var _ = __;

    assert.deepEqual(g(1)(2)(3), [1, 2, 3]);
    assert.deepEqual(g(1)(2, 3), [1, 2, 3]);
    assert.deepEqual(g(1, 2)(3), [1, 2, 3]);
    assert.deepEqual(g(1, 2, 3), [1, 2, 3]);

    assert.deepEqual(g(_, 2, 3)(1), [1, 2, 3]);
    assert.deepEqual(g(1, _, 3)(2), [1, 2, 3]);
    assert.deepEqual(g(1, 2, _)(3), [1, 2, 3]);

    assert.deepEqual(g(1, _, _)(2)(3), [1, 2, 3]);
    assert.deepEqual(g(_, 2, _)(1)(3), [1, 2, 3]);
    assert.deepEqual(g(_, _, 3)(1)(2), [1, 2, 3]);

    assert.deepEqual(g(1, _, _)(2, 3), [1, 2, 3]);
    assert.deepEqual(g(_, 2, _)(1, 3), [1, 2, 3]);
    assert.deepEqual(g(_, _, 3)(1, 2), [1, 2, 3]);

    assert.deepEqual(g(1, _, _)(_, 3)(2), [1, 2, 3]);
    assert.deepEqual(g(_, 2, _)(_, 3)(1), [1, 2, 3]);
    assert.deepEqual(g(_, _, 3)(_, 2)(1), [1, 2, 3]);

    assert.deepEqual(g(_, _, _)(_, _)(_)(1, 2, 3), [1, 2, 3]);
    assert.deepEqual(g(_, _, _)(1, _, _)(_, _)(2, _)(_)(3), [1, 2, 3]);
  });

  it('supports @@functional/placeholder', function() {
    var f = function() { return Array.prototype.slice.call(arguments); };
    var g = curryN(3, f);
    var _ = {'@@functional/placeholder': true, x: Math.random()};

    assert.deepEqual(g(1)(2)(3), [1, 2, 3]);
    assert.deepEqual(g(1)(2, 3), [1, 2, 3]);
    assert.deepEqual(g(1, 2)(3), [1, 2, 3]);
    assert.deepEqual(g(1, 2, 3), [1, 2, 3]);

    assert.deepEqual(g(_, 2, 3)(1), [1, 2, 3]);
    assert.deepEqual(g(1, _, 3)(2), [1, 2, 3]);
    assert.deepEqual(g(1, 2, _)(3), [1, 2, 3]);

    assert.deepEqual(g(1, _, _)(2)(3), [1, 2, 3]);
    assert.deepEqual(g(_, 2, _)(1)(3), [1, 2, 3]);
    assert.deepEqual(g(_, _, 3)(1)(2), [1, 2, 3]);

    assert.deepEqual(g(1, _, _)(2, 3), [1, 2, 3]);
    assert.deepEqual(g(_, 2, _)(1, 3), [1, 2, 3]);
    assert.deepEqual(g(_, _, 3)(1, 2), [1, 2, 3]);

    assert.deepEqual(g(1, _, _)(_, 3)(2), [1, 2, 3]);
    assert.deepEqual(g(_, 2, _)(_, 3)(1), [1, 2, 3]);
    assert.deepEqual(g(_, _, 3)(_, 2)(1), [1, 2, 3]);

    assert.deepEqual(g(_, _, _)(_, _)(_)(1, 2, 3), [1, 2, 3]);
    assert.deepEqual(g(_, _, _)(1, _, _)(_, _)(2, _)(_)(3), [1, 2, 3]);
  });

  it('forwards extra arguments', function() {
    var f = function() { return Array.prototype.slice.call(arguments); };
    var g = curryN(3, f);

    assert.deepEqual(g(1, 2, 3), [1, 2, 3]);
    assert.deepEqual(g(1, 2, 3, 4), [1, 2, 3, 4]);
    assert.deepEqual(g(1, 2)(3, 4), [1, 2, 3, 4]);
    assert.deepEqual(g(1)(2, 3, 4), [1, 2, 3, 4]);
    assert.deepEqual(g(1)(2)(3, 4), [1, 2, 3, 4]);
  });
});
