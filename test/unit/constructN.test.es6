let assert = require('chai').assert;

import {constructN} from '../../src/index.es6';

describe('constructN', () => {

  class Circle {
    constructor(r, ...args) {
      this.r = r;
      this.colors = args;
    }
    area() {
      return Math.PI * Math.pow(this.r, 2);
    }
  }

  it('turns a constructor function into a function with n arguments', () => {
    let circle = constructN(2, Circle);
    let c1 = circle(1, 'red');
    assert.strictEqual(c1.constructor, Circle);
    assert.strictEqual(c1.r, 1);
    assert.strictEqual(c1.area(), Math.PI);
    assert.deepEqual(c1.colors, ['red']);

    let regex = constructN(1, RegExp);
    let pattern = regex('[a-z]');
    assert.strictEqual(pattern.constructor, RegExp);
    assert.strictEqual(pattern.source, '[a-z]');
  });

  it('can be used to create Date object', () => {
    let date = constructN(3, Date)(1984, 3, 26);
    assert.strictEqual(date.constructor, Date);
    assert.strictEqual(date.getFullYear(), 1984);
  });

  it('supports constructors with no arguments', () => {
    function Foo() {}
    let foo = constructN(0, Foo)();
    assert.strictEqual(foo.constructor, Foo);
  });

  it('does not support constructor with greater than ten arguments', () => {
    assert.throws(
      () => {
        function Foo($0, $1, $2, $3, $4, $5, $6, $7, $8, $9, $10) {
          this.eleventh = $10;
        }
        constructN(11, Foo);
      },
      Error,
      'Constructor with greater than ten arguments'
    );
  });

  it('is curried', () => {
    function G(a, b, c) { this.a = a; this.b = b; this.c = c; }
    let construct2 = constructN(2);
    assert.strictEqual(typeof construct2, 'function');
    let g2 = construct2(G);
    assert.strictEqual(typeof g2, 'function');
    assert.strictEqual(g2('a', 'b').constructor, G);
    assert.strictEqual(g2('a')('b').constructor, G);
  });
});
