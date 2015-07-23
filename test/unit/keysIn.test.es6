let assert = require('chai').assert;

import {keys, keysIn, map, repeat} from '../../src/index.es6';

describe('keysIn', () => {
  var obj = {a: 100, b: [1, 2, 3], c: {x: 200, y: 300}, d: 'D', e: null, f: undefined};
  function C() { this.a = 100; this.b = 200; }
  C.prototype.x = () => { return 'x'; };
  C.prototype.y = 'y';
  var cobj = new C();

  it('returns an array of the given object\'s keys', () => {
    assert.deepEqual(keysIn(obj).sort(), ['a', 'b', 'c', 'd', 'e', 'f']);
  });

  it('includes the given object\'s prototype properties', () => {
    assert.deepEqual(keysIn(cobj).sort(), ['a', 'b', 'x', 'y']);
  });

  it('works for primitives', () => {
    /* jshint elision: true */
    var result = map(function(val) {
      return keys(val);
    }, [null, undefined, 55, '', true, false, NaN, Infinity, , []]);
    assert.deepEqual(result, repeat([], 10));
  });
});
