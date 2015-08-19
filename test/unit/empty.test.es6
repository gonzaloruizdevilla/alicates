let assert = require('chai').assert;

import {toString, empty} from '../../src/index.es6';

describe('empty', () => {

  it('dispatches to `empty` method', () => {
    function Nothing() {}
    Nothing.prototype.empty = () => new Nothing();

    function Just(x) { this.value = x; }
    Just.prototype.empty = () => new Nothing();

    assert.strictEqual(empty(new Nothing()).constructor, Nothing);
    assert.strictEqual(empty(new Just(123)).constructor, Nothing);
  });

  it('dispatches to `empty` function on constructor', () => {

    function Nothing() {}
    Nothing.prototype.empty = function() { return new Nothing(); };

    function Just(x) { this.value = x; }
    Just.prototype.empty = function() { return new Nothing(); };

    assert.strictEqual(empty(new Nothing()).constructor, Nothing);
    assert.strictEqual(empty(new Just(123)).constructor, Nothing);
  });

  it('returns empty array given array', () => {
    assert.strictEqual(toString(empty([1, 2, 3])), '[]');
  });

  it('returns empty object given object', () => {
    assert.strictEqual(toString(empty({x: 1, y: 2})), '{}');
  });

  it('returns empty string given string', () => {
    assert.strictEqual(empty('abc'), '');
    /* jshint -W053 */
    assert.strictEqual(empty(new String('abc')), '');
    /* jshint +W053 */
  });

});
