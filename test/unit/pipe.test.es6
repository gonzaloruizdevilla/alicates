let assert = require('chai').assert;

import {curry, pipe} from '../../src/index.es6';

describe('pipe', function() {

  it('is a variadic function', function() {
    assert.strictEqual(typeof pipe, 'function');
    assert.strictEqual(pipe.length, 0);
  });

  it('performs left-to-right function composition', function() {
    var f = function(a) { return [a]; };
    var g = function(a, b) { return [a, b]; };
    var h = function(a, b, c) { return [a, b, c]; };

    assert.strictEqual(pipe(f, f, f).length, 1);
    assert.strictEqual(pipe(g, f, f).length, 2);
    assert.strictEqual(pipe(h, f, f).length, 3);

    assert.deepEqual(pipe(f, f, f)(1), [[[1]]]);
    assert.deepEqual(pipe(g, f, f)(1, 2), [[[1, 2]]]);
    assert.deepEqual(pipe(g, f, f)(1)(2), [[[1, 2]]]);
    assert.deepEqual(pipe(h, f, f)(1, 2, 3), [[[1, 2, 3]]]);
    assert.deepEqual(pipe(h, f, f)(1, 2)(3), [[[1, 2, 3]]]);
    assert.deepEqual(pipe(h, f, f)(1)(2, 3), [[[1, 2, 3]]]);
    assert.deepEqual(pipe(h, f, f)(1)(2)(3), [[[1, 2, 3]]]);

    var $g = curry(g);

    assert.strictEqual(pipe($g, $g).length, 2);
    assert.deepEqual(pipe($g, $g)(1, 2)(3), [[1, 2], 3]);
    assert.deepEqual(pipe($g, $g)(1)(2)(3), [[1, 2], 3]);
  });

  it('passes context to functions', function() {
    function x(val) {
      return this.x * val;
    }
    function y(val) {
      return this.y * val;
    }
    function z(val) {
      return this.z * val;
    }
    var context = {
      a: pipe(x, y, z),
      x: 4,
      y: 2,
      z: 1
    };
    assert.strictEqual(context.a(5), 40);
  });

  it('throws if given no arguments', function() {
    assert.throws(
      function() { pipe(); },
      Error,
      'pipe requires at least one argument'
    );
  });

  it('can be applied to one argument', function() {
    var f = function(a, b, c) { return [a, b, c]; };
    var g = pipe(f);
    assert.strictEqual(g.length, 3);
    assert.deepEqual(g(1, 2, 3), [1, 2, 3]);
  });

});
