let assert = require('chai').assert;

import {is} from '../../src/index.es6';

describe('is', function() {
  it('works with built-in types', function() {
    assert.strictEqual(is(Array, []), true);
    assert.strictEqual(is(Boolean, new Boolean(false)), true);
    assert.strictEqual(is(Date, new Date()), true);
    assert.strictEqual(is(Function, function() {}), true);
    assert.strictEqual(is(Number, new Number(0)), true);
    assert.strictEqual(is(Object, {}), true);
    assert.strictEqual(is(RegExp, /(?:)/), true);
    assert.strictEqual(is(String, new String('')), true);
  });

  it('works with user-defined types', function() {
    function Foo() {}
    function Bar() {}
    Bar.prototype = new Foo();

    var foo = new Foo();
    var bar = new Bar();

    assert.strictEqual(is(Foo, foo), true);
    assert.strictEqual(is(Bar, bar), true);
    assert.strictEqual(is(Foo, bar), true);
    assert.strictEqual(is(Bar, foo), false);
  });

  it('is curried', function() {
    var isArray = is(Array);
    assert.strictEqual(isArray([]), true);
    assert.strictEqual(isArray({}), false);
  });

  it('considers almost everything an object', function() {
    function Foo() {}
    var foo = new Foo();
    var isObject = is(Object);

    assert.strictEqual(isObject(foo), true);
    assert.strictEqual(isObject(function() { return arguments; }()), true);
    assert.strictEqual(isObject([]), true);
    assert.strictEqual(isObject(new Boolean(false)), true);
    assert.strictEqual(isObject(new Date()), true);
    assert.strictEqual(isObject(function() {}), true);
    assert.strictEqual(isObject(new Number(0)), true);
    assert.strictEqual(isObject(/(?:)/), true);
    assert.strictEqual(isObject(new String('')), true);

    assert.strictEqual(isObject(null), false);
    assert.strictEqual(isObject(undefined), false);
  });

  it('does not coerce', function() {
    assert.strictEqual(is(Boolean, 1), false);
    assert.strictEqual(is(Number, '1'), false);
    assert.strictEqual(is(Number, false), false);
  });

  it('recognizes primitives as their object equivalents', function() {
    assert.strictEqual(is(Boolean, false), true);
    assert.strictEqual(is(Number, 0), true);
    assert.strictEqual(is(String, ''), true);
  });

  it('does not consider primitives to be instances of Object', function() {
    assert.strictEqual(is(Object, false), false);
    assert.strictEqual(is(Object, 0), false);
    assert.strictEqual(is(Object, ''), false);
  });

  it('is curried', function() {
    assert.strictEqual(typeof is(String), 'function');
    assert.strictEqual(is(String)('s'), true);
  });
});
