let assert = require('chai').assert;

import {map, keys, repeat, values} from '../../src/index.es6';

describe('values', () => {
  let obj = {a: 100, b: [1, 2, 3], c: {x: 200, y: 300}, d: 'D', e: null, f: undefined};
  function C() { this.a = 100; this.b = 200; }
  C.prototype.x = () => { return 'x'; };
  C.prototype.y = 'y';
  let cobj = new C();

  it('returns an array of the given object\'s values', () => {
    let vs = values(obj).sort();
    let ts = [[1, 2, 3], 100, 'D', {x: 200, y: 300}, null, undefined];
    assert.strictEqual(vs.length, ts.length);
    assert.deepEqual(vs[0], ts[0]);
    assert.strictEqual(vs[1], ts[1]);
    assert.strictEqual(vs[2], ts[2]);
    assert.deepEqual(vs[3], ts[3]);
    assert.strictEqual(vs[4], ts[4]);
    assert.strictEqual(vs[5], ts[5]);

    assert.deepEqual(values({
      /* jshint -W001 */
      hasOwnProperty: false
      /* jshint +W001 */
    }), [false]);
  });

  it('does not include the given object\'s prototype properties', () => {
    assert.deepEqual(values(cobj), [100, 200]);
  });

  it('works for primitives', () => {
    /* jshint elision: true */
    /* eslint-disable no-sparse-arrays */
    let result = map(function(val) {
      return keys(val);
    }, [null, undefined, 55, '', true, false, NaN, Infinity, , []]);
    assert.deepEqual(result, repeat([], 10));
  });
});
