let assert = require('chai').assert;

import {converge, __, add} from '../../src/index.es6';

describe('converge', () =>  {
  let mult = (a, b) => a * b;

  let f1 = converge(mult, a => a, a => a);
  let f2 = converge(mult, a => a, (a, b) => b);
  let f3 = converge(mult, a => a, (a, b, c) => c);

  it('passes the results of applying the arguments individually to two separate functions into a single one', () =>  {
    assert.strictEqual(converge(mult, add(1), add(3))(2), 15); // mult(add1(2), add3(2)) = mult(3, 5) = 3 * 15;
  });

  it('returns a function with the length of the "longest" argument', () =>  {
    assert.strictEqual(f1.length, 1);
    assert.strictEqual(f2.length, 2);
    assert.strictEqual(f3.length, 3);
  });

  it('passes context to its functions', () =>  {
    let a = function(x) { return this.f1(x); };
    let b = function(x) { return this.f2(x); };
    let c = function(x, y) { return this.f3(x, y); };
    let d = converge(c, a, b);
    let context = {f1: add(1), f2: add(2), f3: add};
    assert.equal(a.call(context, 1), 2);
    assert.equal(b.call(context, 1), 3);
    assert.equal(d.call(context, 1), 5);
  });

  it('returns a curried function', () =>  {
    assert.strictEqual(f2(6)(7), 42);
    assert.strictEqual(f3(__).length, 3);
  });
});
