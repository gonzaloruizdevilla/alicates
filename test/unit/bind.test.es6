let assert = require('chai').assert;

import {bind} from '../../src/index.es6';

describe('bind', () => {

  function Foo(x) {
    this.x = x;
  }
  function add(x) {
    return this.x + x;
  }
  function Bar(x, y) {
    this.x = x;
    this.y = y;
  }
  Bar.prototype = new Foo();
  Bar.prototype.getX = () => {
    return 'prototype getX';
  };

  it('returns a function', () => {
    assert.strictEqual(typeof bind(add, Foo), 'function');
  });

  it('returns a function bound to the specified context object', () => {
    var f = new Foo(12);
    function isFoo() {
      return this instanceof Foo;
    }
    var isFooBound = bind(isFoo, f);
    assert.strictEqual(isFoo(), false);
    assert.strictEqual(isFooBound(), true);
  });

  it('works with built-in types', () => {
    var abc = bind(String.prototype.toLowerCase, 'ABCDEFG');
    assert.strictEqual(typeof abc, 'function');
    assert.strictEqual(abc(), 'abcdefg');
  });

  it('works with user-defined types', () => {
    var f = new Foo(12);
    function getX() {
      return this.x;
    }
    var getXFooBound = bind(getX, f);
    assert.strictEqual(getXFooBound(), 12);
  });

  it('works with plain objects', () => {
    var pojso = {
      x: 100
    };
    function incThis() {
      return this.x + 1;
    }
    var incPojso = bind(incThis, pojso);
    assert.strictEqual(typeof incPojso, 'function');
    assert.strictEqual(incPojso(), 101);
  });

  it('does not interefere with existing object methods', () => {
    var b = new Bar('a', 'b');
    function getX() {
      return this.x;
    }
    var getXBarBound = bind(getX, b);
    assert.strictEqual(b.getX(), 'prototype getX');
    assert.strictEqual(getXBarBound(), 'a');
  });

  it('is curried', () => {
    var f = new Foo(1);
    assert.strictEqual(bind(add)(f)(10), 11);
  });

  it('preserves arity', () => {
    var f0 = function() { return 0; };
    var f1 = function(a) { return a; };
    var f2 = function(a, b) { return a + b; };
    var f3 = function(a, b, c) { return a + b + c; };

    assert.strictEqual(bind(f0, {}).length, 0);
    assert.strictEqual(bind(f1, {}).length, 1);
    assert.strictEqual(bind(f2, {}).length, 2);
    assert.strictEqual(bind(f3, {}).length, 3);
  });
});
