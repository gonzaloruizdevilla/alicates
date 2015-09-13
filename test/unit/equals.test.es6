let assert = require('chai').assert;

import {equals} from '../../src/index.es6';

describe('equals', () => {

  it('should return true if same object', () => {
    let o = {};
    assert.equal(equals(o, o), true);
    assert.equal(equals(o, {}), true);
    assert.equal(equals(1, '1'), false);
    assert.equal(equals(1, '2'), false);
  });

  it('should recurse into object', () => {
    assert.equal(equals({}, {}), true);
    assert.equal(equals({name: 'gonzalo'}, {name: 'gonzalo'}), true);
    assert.equal(equals({name: 'gonzalo', age: 1}, {name: 'gonzalo'}), false);
    assert.equal(equals({name: 'gonzalo'}, {name: 'gonzalo', age: 1}), false);
    assert.equal(equals({name: 'gonzalo'}, {name: 'manuel'}), false);
    assert.equal(equals(['gonzalo'], ['gonzalo']), true);
    assert.equal(equals(['gonzalo'], ['manuel']), false);
    assert.equal(equals(['gonzalo'], ['gonzalo', 'manuel']), false);
  });

  it('should ignore functions', () => {
    assert.equal(equals({func: () => {}}, {bar: () => {}}), true);
  });

  it('should work well with nulls', () => {
    assert.equal(equals(null, '123'), false);
    assert.equal(equals('123', null), false);

    let obj = {foo: 'bar'};
    assert.equal(equals(null, obj), false);
    assert.equal(equals(obj, null), false);

    assert.equal(equals(null, null), true);
  });

  it('should work well with undefined', () => {
    assert.equal(equals(undefined, '123'), false);
    assert.equal(equals('123', undefined), false);

    let obj = {foo: 'bar'};
    assert.equal(equals(undefined, obj), false);
    assert.equal(equals(obj, undefined), false);

    assert.equal(equals(undefined, undefined), true);
  });

  it('should treat two NaNs as equal', () => {
    assert.equal(equals(NaN, NaN), true);
  });

  it('should return false when 0 to -0', () => {
    assert.equal(equals(0, -0), false);
  });

  it('should compare dates', () => {
    assert.equal(equals(new Date(0), new Date(0)), true);
    assert.equal(equals(new Date(0), new Date(1)), false);
    assert.equal(equals(new Date(0), 0), false);
    assert.equal(equals(0, new Date(0)), false);

    assert.equal(equals(new Date(undefined), new Date(undefined)), true);
    assert.equal(equals(new Date(undefined), new Date(0)), false);
    assert.equal(equals(new Date(undefined), new Date(null)), false);
    assert.equal(equals(new Date(undefined), new Date('wrong')), true);
    assert.equal(equals(new Date(), /abc/), false);
  });

  it('should compare regular expressions', () => {
    assert.equal(equals(/abc/, /abc/), true);
    assert.equal(equals(/abc/i, new RegExp('abc', 'i')), true);
    assert.equal(equals(new RegExp('abc', 'i'), new RegExp('abc', 'i')), true);
    assert.equal(equals(new RegExp('abc', 'i'), new RegExp('abc')), false);
    assert.equal(equals(/abc/i, /abc/), false);
    assert.equal(equals(/abc/, /def/), false);
    assert.equal(equals(/^abc/, /abc/), false);
    assert.equal(equals(/^abc/, '/^abc/'), false);
    assert.equal(equals(/abc/, new Date()), false);
  });

  it('should correctly test for keys that are present on Object.prototype', () => {
    /* jshint -W001 */
    assert.equal(equals({}, {hasOwnProperty: 1}), false);
    assert.equal(equals({}, {toString: null}), false);
  });

  it('should return false when comparing an object and an array', () => {
    assert.equal(equals({}, []), false);
    assert.equal(equals([], {}), false);
  });

  it('should return false when comparing an object and a RegExp', () => {
    assert.equal(equals({}, /abc/), false);
    assert.equal(equals({}, new RegExp('abc', 'i')), false);
  });

  it('should return false when comparing an object and a Date', () => {
    assert.equal(equals({}, new Date()), false);
  });

  /*it('should safely compare objects with no prototype parent', () => {
    let o1 = extend(Object.create(null), {
      a: 1, b: 2, c: 3
    });
    let o2 = extend(Object.create(null), {
      a: 1, b: 2, c: 3
    });
    assert.equal(equals(o1, o2), true);
    o2.c = 2;
    assert.equal(equals(o1, o2), false);
  });*/

  it('should safely compare objects which shadow Object.prototype.hasOwnProperty', () => {
    /* jshint -W001 */
    let o1 = {
      hasOwnProperty: true,
      a: 1,
      b: 2,
      c: 3
    };
    let o2 = {
      hasOwnProperty: true,
      a: 1,
      b: 2,
      c: 3
    };
    assert.equal(equals(o1, o2), true);
    o1.hasOwnProperty = () => {};
    assert.equal(equals(o1, o2), false);
  });


  it('dispatches to `equals` method', () => {
    class Left{
      constructor(x) {
        this.value = x;
      }
      equals(x) {
        return x instanceof Left && equals(x.value, this.value);
      }
    }
    class Right{
      constructor(x) {
        this.value = x;
      }
      equals(x) {
        return x instanceof Right && equals(x.value, this.value);
      }
    }

    assert.strictEqual(equals(new Left([42]), new Left([42])), true);
    assert.strictEqual(equals(new Left([42]), new Left([43])), false);
    assert.strictEqual(equals(new Left(42), {value: 42}), false);
    assert.strictEqual(equals({value: 42}, new Left(42)), false);
    assert.strictEqual(equals(new Left(42), new Right(42)), false);
    assert.strictEqual(equals(new Right(42), new Left(42)), false);
  });

  it('requires that both objects have the same enumerable properties with the same values', () => {
    /* jshint -W053 */
    var a1 = [];
    var a2 = [];
    a2.x = 0;

    var b1 = new Boolean(false);
    var b2 = new Boolean(false);
    b2.x = 0;

    var d1 = new Date(0);
    var d2 = new Date(0);
    d2.x = 0;

    var n1 = new Number(0);
    var n2 = new Number(0);
    n2.x = 0;

    var r1 = /(?:)/;
    var r2 = /(?:)/;
    r2.x = 0;

    var s1 = new String('');
    var s2 = new String('');
    s2.x = 0;
    /* jshint +W053 */

    assert.strictEqual(equals(a1, a2), false);
    assert.strictEqual(equals(b1, b2), false);
    assert.strictEqual(equals(d1, d2), false);
    assert.strictEqual(equals(n1, n2), false);
    assert.strictEqual(equals(r1, r2), false);
    assert.strictEqual(equals(s1, s2), false);
  });

  if (typeof ArrayBuffer !== 'undefined' && typeof Int8Array !== 'undefined') {
    var typArr1 = new ArrayBuffer(10);
    typArr1[0] = 1;
    var typArr2 = new ArrayBuffer(10);
    typArr2[0] = 1;
    var typArr3 = new ArrayBuffer(10);
    var intTypArr = new Int8Array(typArr1);
    typArr3[0] = 0;
    it('handles typed arrays', function() {
      assert.strictEqual(equals(typArr1, typArr2), true);
      assert.strictEqual(equals(typArr1, typArr3), false);
      assert.strictEqual(equals(typArr1, intTypArr), false);
    });
  }

  it('compares Map objects by value', function() {
    assert.strictEqual(equals(new Map([]), new Map([])), true);
    assert.strictEqual(equals(new Map([]), new Map([[1, 'a']])), false);
    assert.strictEqual(equals(new Map([[1, 'a']]), new Map([])), false);
    assert.strictEqual(equals(new Map([[1, 'a']]), new Map([[1, 'a']])), true);
    assert.strictEqual(equals(new Map([[1, 'a']]), new Map([[1, 'b']])), false);
    assert.strictEqual(equals(new Map([[1, 'a'], [2, new Map([[3, 'c']])]]), new Map([[1, 'a'], [2, new Map([[3, 'c']])]])), true);
    assert.strictEqual(equals(new Map([[1, 'a'], [2, new Map([[3, 'c']])]]), new Map([[1, 'a'], [2, new Map([[3, 'd']])]])), false);
    assert.strictEqual(equals(new Map([[[1, 2, 3], [4, 5, 6]]]), new Map([[[1, 2, 3], [4, 5, 6]]])), true);
    assert.strictEqual(equals(new Map([[[1, 2, 3], [4, 5, 6]]]), new Map([[[1, 2, 3], [7, 8, 9]]])), false);
    assert.strictEqual(equals(
        new Map([[[1, 2, 3], [4, 5, 6]],    [[7, 8, 9], [10, 11, 12]]]),
        new Map([[[7, 8, 9], [10, 11, 12]], [[1, 2, 3], [4, 5, 6]]])
      ), true);
  });



  it('compares Set objects by value', function() {
    assert.strictEqual(equals(new Set([]), new Set([])), true);
    assert.strictEqual(equals(new Set([]), new Set([1])), false);
    assert.strictEqual(equals(new Set([1]), new Set([])), false);
    assert.strictEqual(equals(new Set([1, new Set([2, new Set([3])])]), new Set([1, new Set([2, new Set([3])])])), true);
    assert.strictEqual(equals(new Set([1, new Set([2, new Set([3])])]), new Set([1, new Set([2, new Set([4])])])), false);
    assert.strictEqual(equals(new Set([[1, 2, 3], [4, 5, 6]]), new Set([[1, 2, 3], [4, 5, 6]])), true);
    assert.strictEqual(equals(new Set([[1, 2, 3], [4, 5, 6]]), new Set([[1, 2, 3], [7, 8, 9]])), false);
  });



  it('compares WeakMap objects by identity', function() {
    var m = new WeakMap([]);
    assert.strictEqual(equals(m, m), true);
    assert.strictEqual(equals(m, new WeakMap([])), false);
  });

  it('compares WeakSet objects by identity', function() {
    var s = new WeakSet([]);
    assert.strictEqual(equals(s, s), true);
    assert.strictEqual(equals(s, new WeakSet([])), false);
  });

  it('is curried', () => {
    let a = [];
    let isA = equals(a);
    assert.strictEqual(isA([]), true);
  });
});
