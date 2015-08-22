let assert = require('chai').assert;

import {clone, forEach, keys} from '../../src/index.es6';


describe('deep clone integers, strings and booleans', function() {
  it('clone integers', function() {
    assert.strictEqual(clone(-4), -4);
    assert.strictEqual(clone(9007199254740991), 9007199254740991);
  });

  it('clone floats', function() {
    assert.strictEqual(clone(-4.5), -4.5);
    assert.strictEqual(clone(0.0), 0.0);
  });

  it('clone strings', function() {
    assert.strictEqual(clone('ramda'), 'ramda');
  });

  it('clone booleans', function() {
    assert.strictEqual(clone(true), true);
  });
});

describe('deep clone objects', function() {
  it('clone shallow object', function() {
    var obj = {a: 1, b: 'ramda', c: true, d: new Date(2013, 11, 25)};
    var cloned = clone(obj);
    obj.c = false;
    obj.d.setDate(31);
    assert.deepEqual(cloned, {a: 1, b: 'ramda', c: true, d: new Date(2013, 11, 25)});
  });

  it('clone deep object', function() {
    var obj = {a: {b: {c: 'ramda'}}};
    var cloned = clone(obj);
    obj.a.b.c = null;
    assert.deepEqual(cloned, {a: {b: {c: 'ramda'}}});
  });

  it('clone objects with circular references', function() {
    var x = {c: null};
    var y = {a: x};
    var z = {b: y};
    x.c = z;
    var cloned = clone(x);
    assert.notStrictEqual(x, cloned);
    assert.notStrictEqual(x.c, cloned.c);
    assert.notStrictEqual(x.c.b, cloned.c.b);
    assert.notStrictEqual(x.c.b.a, cloned.c.b.a);
    assert.notStrictEqual(x.c.b.a.c, cloned.c.b.a.c);
    assert.deepEqual(keys(cloned), keys(x));
    assert.deepEqual(keys(cloned.c), keys(x.c));
    assert.deepEqual(keys(cloned.c.b), keys(x.c.b));
    assert.deepEqual(keys(cloned.c.b.a), keys(x.c.b.a));
    assert.deepEqual(keys(cloned.c.b.a.c), keys(x.c.b.a.c));

    x.c.b = 1;
    assert.notDeepEqual(keys(cloned.c.b), keys(x.c.b));
  });

  it('clone instances', function() {
    var Obj = function(x) {
      this.x = x;
    };
    Obj.prototype.get = function() {
      return this.x;
    };
    Obj.prototype.set = function(x) {
      this.x = x;
    };

    var obj = new Obj(10);
    assert.strictEqual(obj.get(), 10);

    var cloned = clone(obj);
    assert.strictEqual(cloned.get(), 10);

    assert.notStrictEqual(obj, cloned);

    obj.set(11);
    assert.strictEqual(obj.get(), 11);
    assert.strictEqual(cloned.get(), 10);
  });
});

describe('deep clone arrays', function() {
  it('clone shallow arrays', function() {
    var list = [1, 2, 3];
    var cloned = clone(list);
    list.pop();
    assert.deepEqual(cloned, [1, 2, 3]);
  });

  it('clone deep arrays', function() {
    var list = [1, [1, 2, 3], [[[5]]]];
    var cloned = clone(list);

    assert.notStrictEqual(list, cloned);
    assert.notStrictEqual(list[2], cloned[2]);
    assert.notStrictEqual(list[2][0], cloned[2][0]);

    assert.deepEqual(cloned, [1, [1, 2, 3], [[[5]]]]);
  });
});

describe('deep `clone` functions', function() {
  it('keep reference to function', function() {
    var fn = function(x) { return x + x;};
    var list = [{a: fn}];

    var cloned = clone(list);

    assert.strictEqual(cloned[0].a(10), 20);
    assert.strictEqual(list[0].a, cloned[0].a);
  });
});

describe('built-in types', function() {
  it('clones Date object', function() {
    var date = new Date(2014, 10, 14, 23, 59, 59, 999);

    var cloned = clone(date);

    assert.notStrictEqual(date, cloned);
    assert.deepEqual(cloned.toString(), new Date(2014, 10, 14, 23, 59, 59, 999).toString());

    assert.strictEqual(cloned.getDay(), 5); // friday
  });

  it('clones RegExp object', function() {
    forEach(function(pattern) {
      var cloned = clone(pattern);
      assert.notStrictEqual(cloned, pattern);
      assert.strictEqual(cloned.constructor, RegExp);
      assert.strictEqual(cloned.source, pattern.source);
      assert.strictEqual(cloned.global, pattern.global);
      assert.strictEqual(cloned.ignoreCase, pattern.ignoreCase);
      assert.strictEqual(cloned.multiline, pattern.multiline);
    }, [/x/, /x/g, /x/i, /x/m, /x/gi, /x/gm, /x/im, /x/gim]);
  });
});

describe('deep clone deep nested mixed objects', function() {
  it('clone array with objects', function() {
    var list = [{a: {b: 1}}, [{c: {d: 1}}]];
    var cloned = clone(list);
    list[1][0] = null;
    assert.deepEqual(cloned, [{a: {b: 1}}, [{c: {d: 1}}]]);
  });

  it('clone array with arrays', function() {
    var list = [[1], [[3]]];
    var cloned = clone(list);
    list[1][0] = null;
    assert.deepEqual(cloned, [[1], [[3]]]);
  });

  it('clone array with mutual ref object', function() {
    var obj = {a: 1};
    var list = [{b: obj}, {b: obj}];
    var cloned = clone(list);

    assert.strictEqual(list[0].b, list[1].b);
    assert.strictEqual(cloned[0].b, cloned[1].b);
    assert.notStrictEqual(cloned[0].b, list[0].b);
    assert.notStrictEqual(cloned[1].b, list[1].b);

    assert.deepEqual(cloned[0].b, {a:1});
    assert.deepEqual(cloned[1].b, {a:1});

    obj.a = 2;
    assert.deepEqual(cloned[0].b, {a:1});
    assert.deepEqual(cloned[1].b, {a:1});
  });
});

describe('deep clone edge cases', function() {
  it('nulls, undefineds and empty objects and arrays', function() {
    assert.strictEqual(clone(null), null);
    assert.strictEqual(clone(undefined), undefined);
    assert.notStrictEqual(clone(undefined), null);

    var obj = {};
    assert.notStrictEqual(clone(obj), obj);

    var list = [];
    assert.notStrictEqual(clone(list), list);
  });
});
