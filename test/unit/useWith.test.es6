let assert = require('chai').assert;

import {add, useWith} from '../../src/index.es6';

describe('useWith', () => {
  let max = Math.max;
  let add1 = x => x + 1;
  let mult2 = x => x * 2;
  let div3 = x =>  x / 3;
  let f = useWith(max, [add1, mult2, div3]);

  it('takes a list of function and returns a function', () => {
    assert.strictEqual(typeof useWith(max, []), 'function');
    assert.strictEqual(typeof useWith(max, [add1]), 'function');
    assert.strictEqual(typeof useWith(max, [add1, mult2, div3]), 'function');
  });

  it('passes the arguments received to their respective functions', () => {
    assert.strictEqual(f(7, 8, 9), 16); // max(7 + 1, 8 * 2, 9 / 3);
  });

  it('passes additional arguments to the main function', () => {
    assert.strictEqual(f(7, 8, 9, 10), 16);
    assert.strictEqual(f(7, 8, 9, 20), 20);
  });

  it('has the correct arity', () => {
    assert.strictEqual(f.length, 3);
  });

  it('passes context to its functions', () => {
    let a = function(x) { return this.f1(x); };
    let b = function(x) { return this.f2(x); };
    let c = function(x, y) { return this.f3(x, y); };
    let d = useWith(c, [a, b]);
    let context = {f1: add(1), f2: add(2), f3: add};
    assert.strictEqual(a.call(context, 1), 2);
    assert.strictEqual(b.call(context, 1), 3);
    assert.strictEqual(d.apply(context, [1, 1]), 5);
    assert.strictEqual(d.apply(context, [2, 3]), 8);
  });

});
