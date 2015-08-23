let assert = require('chai').assert;

import {slice} from '../../src/index.es6';

describe('slice', () => {

  it('retrieves the proper sublist of a list', () => {
    var list = [8, 6, 7, 5, 3, 0, 9];
    assert.deepEqual(slice(2, 5, list), [7, 5, 3]);
  });


  it('handles array-like object', () => {
    var args = (function() { return arguments; }(1, 2, 3, 4, 5));
    assert.deepEqual(slice(1, 4, args), [2, 3, 4]);
  });


  it('can operate on strings', () => {
    assert.strictEqual(slice(0, 0, 'abc'), '');
    assert.strictEqual(slice(0, 1, 'abc'), 'a');
    assert.strictEqual(slice(0, 2, 'abc'), 'ab');
    assert.strictEqual(slice(0, 3, 'abc'), 'abc');
    assert.strictEqual(slice(0, 4, 'abc'), 'abc');
    assert.strictEqual(slice(1, 0, 'abc'), '');
    assert.strictEqual(slice(1, 1, 'abc'), '');
    assert.strictEqual(slice(1, 2, 'abc'), 'b');
    assert.strictEqual(slice(1, 3, 'abc'), 'bc');
    assert.strictEqual(slice(1, 4, 'abc'), 'bc');
    assert.strictEqual(slice(0, -4, 'abc'), '');
    assert.strictEqual(slice(0, -3, 'abc'), '');
    assert.strictEqual(slice(0, -2, 'abc'), 'a');
    assert.strictEqual(slice(0, -1, 'abc'), 'ab');
    assert.strictEqual(slice(0, -0, 'abc'), '');
    assert.strictEqual(slice(-2, -4, 'abc'), '');
    assert.strictEqual(slice(-2, -3, 'abc'), '');
    assert.strictEqual(slice(-2, -2, 'abc'), '');
    assert.strictEqual(slice(-2, -1, 'abc'), 'b');
    assert.strictEqual(slice(-2, -0, 'abc'), '');
  });
});
