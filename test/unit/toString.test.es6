let assert = require('chai').assert;

import {toString} from '../../src/index.es6';

describe('toString', () => {
  it('returns the string representation of null', () => {
    assert.strictEqual(toString(null), 'null');
  });

  it('returns the string representation of undefined', () => {
    assert.strictEqual(toString(undefined), 'undefined');
  });

  it('returns the string representation of a Boolean primitive', () => {
    assert.strictEqual(toString(true), 'true');
    assert.strictEqual(toString(false), 'false');
  });

  it('returns the string representation of a number primitive', () => {
    assert.strictEqual(toString(0), '0');
    assert.strictEqual(toString(-0), '-0');
    assert.strictEqual(toString(1.23), '1.23');
    assert.strictEqual(toString(-1.23), '-1.23');
    assert.strictEqual(toString(1e+23), '1e+23');
    assert.strictEqual(toString(-1e+23), '-1e+23');
    assert.strictEqual(toString(1e-23), '1e-23');
    assert.strictEqual(toString(-1e-23), '-1e-23');
    assert.strictEqual(toString(Infinity), 'Infinity');
    assert.strictEqual(toString(-Infinity), '-Infinity');
    assert.strictEqual(toString(NaN), 'NaN');
  });

  it('returns the string representation of a string primitive', () => {
    assert.strictEqual(toString('abc'), '"abc"');
    assert.strictEqual(toString('x "y" z'), '"x \\"y\\" z"');
  });

  it('returns the string representation of a Boolean object', () => {
    /* jshint -W053 */
    assert.strictEqual(toString(new Boolean(true)), 'new Boolean(true)');
    assert.strictEqual(toString(new Boolean(false)), 'new Boolean(false)');
    /* jshint +W053 */
  });

  it('returns the string representation of a Number object', () => {
    /* jshint -W053 */
    assert.strictEqual(toString(new Number(0)), 'new Number(0)');
    assert.strictEqual(toString(new Number(-0)), 'new Number(-0)');
    /* jshint +W053 */
  });

  it('returns the string representation of a String object', () => {
    /* jshint -W053 */
    assert.strictEqual(toString(new String('abc')), 'new String("abc")');
    assert.strictEqual(toString(new String('x "y" z')), 'new String("x \\"y\\" z")');
    /* jshint +W053 */
  });

  it('returns the string representation of a Date object', () => {
    assert.strictEqual(toString(new Date('2001-02-03T04:05:06.000Z')), 'new Date("2001-02-03T04:05:06.000Z")');
  });

  it('returns the string representation of a RegExp object', () => {
    assert.strictEqual(toString(/(?:)/), '/(?:)/');
    assert.strictEqual(toString(/\//g), '/\\//g');
  });

  it('returns the string representation of a function', () => {
    function add(a, b) {
      return a + b;
    }

    assert.strictEqual(toString(add), 'function add(a, b) {\n      return a + b;\n    }');
  });

  it('returns the string representation of an array', () => {
    assert.strictEqual(toString([]), '[]');
    assert.strictEqual(toString([1, 2, 3]), '[1, 2, 3]');
    assert.strictEqual(toString([1, [2, [3]]]), '[1, [2, [3]]]');
    assert.strictEqual(toString(['x', 'y']), '["x", "y"]');
  });

  it('returns the string representation of an array with non-numeric property names', () => {
    var xs = [1, 2, 3];
    xs.foo = 0;
    xs.bar = 0;
    xs.baz = 0;

    assert.strictEqual(toString(/x/.exec('xyz')), '["x", "index": 0, "input": "xyz"]');
    assert.strictEqual(toString(xs), '[1, 2, 3, "bar": 0, "baz": 0, "foo": 0]');
  });


  it('returns the string representation of an arguments object', () => {
    assert.strictEqual(toString((function() { return arguments; }())), '(function() { return arguments; }())');
    assert.strictEqual(toString((function() { return arguments; }(1, 2, 3))), '(function() { return arguments; }(1, 2, 3))');
    assert.strictEqual(toString((function() { return arguments; }(['x', 'y']))), '(function() { return arguments; }(["x", "y"]))');
  });

  it('returns the string representation of a plain object', () => {
    assert.strictEqual(toString({}), '{}');
    assert.strictEqual(toString({foo: 1, bar: 2, baz: 3}), '{"bar": 2, "baz": 3, "foo": 1}');
    assert.strictEqual(toString({'"quoted"': true}), '{"\\"quoted\\"": true}');
    assert.strictEqual(toString({a: {b: {c: {}}}}), '{"a": {"b": {"c": {}}}}');
  });

  it('treats instance without custom `toString` method as plain object', () => {
    function Point(x, y) {
      this.x = x;
      this.y = y;
    }
    assert.strictEqual(toString(new Point(1, 2)), '{"x": 1, "y": 2}');
  });

  it('dispatches to custom `toString` method', () => {
    class Point {
      constructor(x, y){
        this.x = x;
        this.y = y;
      }
      toString() {
        return 'new Point(' + this.x + ', ' + this.y + ')';
      }
    }

    assert.strictEqual(toString(new Point(1, 2)), 'new Point(1, 2)');

    function Just(x) {
      if (!(this instanceof Just)) {
        return new Just(x);
      }
      this.value = x;
    }
    Just.prototype.toString = function() {
      return 'Just(' + toString(this.value) + ')';
    };

    /* jshint -W064*/
    assert.strictEqual(toString(Just(42)), 'Just(42)');
    assert.strictEqual(toString(Just([1, 2, 3])), 'Just([1, 2, 3])');
    assert.strictEqual(toString(Just(Just(Just('')))), 'Just(Just(Just("")))');
    /* jshint +W064*/
  });

  it('handles object with no `toString` method', () => {
    if (typeof Object.create === 'function') {
      var a = Object.create(null);
      var b = Object.create(null); b.x = 1; b.y = 2;
      assert.strictEqual(toString(a), '{}');
      assert.strictEqual(toString(b), '{"x": 1, "y": 2}');
    }
  });

  it('handles circular references', () => {
    var a = [];
    a[0] = a;
    assert.strictEqual(toString(a), '[<Circular>]');

    var o = {};
    o.o = o;
    assert.strictEqual(toString(o), '{"o": <Circular>}');

    var b = ['bee'];
    var c = ['see'];
    b[1] = c;
    c[1] = b;
    assert.strictEqual(toString(b), '["bee", ["see", <Circular>]]');
    assert.strictEqual(toString(c), '["see", ["bee", <Circular>]]');

    var p = {};
    var q = {};
    p.q = q;
    q.p = p;
    assert.strictEqual(toString(p), '{"q": {"p": <Circular>}}');
    assert.strictEqual(toString(q), '{"p": {"q": <Circular>}}');

    var x = [];
    var y = {};
    x[0] = y;
    y.x = x;
    assert.strictEqual(toString(x), '[{"x": <Circular>}]');
    assert.strictEqual(toString(y), '{"x": [<Circular>]}');
  });
});
