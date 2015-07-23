let assert = require('chai').assert;

import {indexOf, map, repeat, values, valuesIn} from '../../src/index.es6';

describe('valuesIn', () => {
  let obj = {a: 100, b: [1, 2, 3], c: {x: 200, y: 300}, d: 'D', e: null, f: undefined};
  function C() { this.a = 100; this.b = 200; }
  C.prototype.x = () => { return 'x'; };
  C.prototype.y = 'y';
  let cobj = new C();

  it('returns an array of the given object\'s values', () => {
    let vs = valuesIn(obj);
    assert.strictEqual(vs.length, 6);
    assert.strictEqual(indexOf(100, vs) >= 0, true);
    assert.strictEqual(indexOf('D', vs) >= 0, true);
    assert.strictEqual(indexOf(null, vs) >= 0, true);
    assert.strictEqual(indexOf(undefined, vs) >= 0, true);
    assert.strictEqual(indexOf(obj.b, vs) >= 0, true);
    assert.strictEqual(indexOf(obj.c, vs) >= 0, true);
  });

  it('includes the given object\'s prototype properties', () => {
    let vs = valuesIn(cobj);
    assert.strictEqual(vs.length, 4);
    assert.strictEqual(indexOf(100, vs) >= 0, true);
    assert.strictEqual(indexOf(200, vs) >= 0, true);
    assert.strictEqual(indexOf(cobj.x, vs) >= 0, true);
    assert.strictEqual(indexOf('y', vs) >= 0, true);
  });

  it('works for primitives', () => {
    /* jshint elision: true */
    let result = map(function(val) {
      return values(val);
    }, [null, undefined, 55, '', true, false, NaN, Infinity, , []]);
    assert.deepEqual(result, repeat([], 10));
  });
});
