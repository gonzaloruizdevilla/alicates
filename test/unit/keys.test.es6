let assert = require('chai').assert;

import {keys, map, repeat} from '../../src/index.es6';

describe('keys', () => {
  var obj = {a: 100, b: [1, 2, 3], c: {x: 200, y: 300}, d: 'D', e: null, f: undefined};
  function C() { this.a = 100; this.b = 200; }
  C.prototype.x = function() { return 'x'; };
  C.prototype.y = 'y';
  var cobj = new C();

  it('returns an array of the given object\'s own keys', () => {
    assert.deepEqual(keys(obj).sort(), ['a', 'b', 'c', 'd', 'e', 'f']);
  });

  it('works with hasOwnProperty override', () => {
    assert.deepEqual(keys({
      /* jshint -W001 */
      hasOwnProperty: false
      /* jshint +W001 */
    }), ['hasOwnProperty']);
  });

  it('works for primitives', () => {
    /* jshint elision: true */
    /*eslint-disable no-sparse-arrays */
    var result = map(function(val) {
      return keys(val);
    }, [null, undefined, 55, '', true, false, NaN, Infinity, , []]);
    assert.deepEqual(result, repeat([], 10));
  });

  it('does not include the given object\'s prototype properties', () => {
    assert.deepEqual(keys(cobj).sort(), ['a', 'b']);
  });
});
