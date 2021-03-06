let assert = require('chai').assert;

import {apply, identity, unapply} from '../../src/index.es6';

describe('unapply', () => {
  it('returns a function which is always passed one argument', () => {
    let fn = unapply(function() { return arguments.length; });
    assert.strictEqual(fn(), 1);
    assert.strictEqual(fn('x'), 1);
    assert.strictEqual(fn('x', 'y'), 1);
    assert.strictEqual(fn('x', 'y', 'z'), 1);
  });

  it('forwards arguments to decorated function as an array', () => {
    let fn = unapply(function(xs) { return '[' + xs + ']'; });
    assert.strictEqual(fn(), '[]');
    assert.strictEqual(fn(2), '[2]');
    assert.strictEqual(fn(2, 4), '[2,4]');
    assert.strictEqual(fn(2, 4, 6), '[2,4,6]');
  });

  it('returns a function with length 0', () => {
    let fn = unapply(identity);
    assert.strictEqual(fn.length, 0);
  });

  it('is the inverse of apply', () => {
    let rand = () => {
      return Math.floor(200 * Math.random()) - 100;
    };

    let f = Math.max;
    let g = unapply(apply(f));
    let n = 1;
    while (n <= 100) {
      let a = rand();
      let b = rand();
      let c = rand();
      let d = rand();
      let e = rand();
      assert.strictEqual(f(a, b, c, d, e), g(a, b, c, d, e));
      n += 1;
    }

    f = function(xs) { return '[' + xs + ']'; };
    g = apply(unapply(f));
    n = 1;
    while (n <= 100) {
      let a = rand();
      let b = rand();
      let c = rand();
      let d = rand();
      let e = rand();
      assert.strictEqual(f([a, b, c, d, e]), g([a, b, c, d, e]));
      n += 1;
    }
  });
});
