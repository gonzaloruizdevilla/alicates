let assert = require('chai').assert;

import {curry} from '../../src/index.es6';

describe('curry', () => {
  it('should curry functions', () => {
    var curriedAdd = curry((a,b)=>a+b);
    assert.equal(curriedAdd(1)(2),3);
  });

  it('properly reports the length of the curried function', () => {
    var f = curry(function(a, b, c, d) {return (a + b * c) / d;});
    assert.strictEqual(f.length, 4);
    var g = f(12);
    assert.strictEqual(g.length, 3);
    var h = g(3);
    assert.strictEqual(h.length, 2);
    assert.strictEqual(g(3, 6).length, 1);
  });

  it('preserves context', function() {
    var ctx = {x: 10};
    var f = function(a, b) { return a + b * this.x; };
    var g = curry(f);

    assert.strictEqual(g.call(ctx, 2, 4), 42);
    assert.strictEqual(g.call(ctx, 2).call(ctx, 4), 42);
  });

  it('forwards extra arguments', function() {
    var f = function(a, b, c) {
      void c;
      return Array.prototype.slice.call(arguments);
    };
    var g = curry(f);

    assert.deepEqual(g(1, 2, 3), [1, 2, 3]);
    assert.deepEqual(g(1, 2, 3, 4), [1, 2, 3, 4]);
    assert.deepEqual(g(1, 2)(3, 4), [1, 2, 3, 4]);
    assert.deepEqual(g(1)(2, 3, 4), [1, 2, 3, 4]);
    assert.deepEqual(g(1)(2)(3, 4), [1, 2, 3, 4]);
  });

});
