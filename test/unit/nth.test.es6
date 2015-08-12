let assert = require('chai').assert;

import {nth} from '../../src/index.es6';


describe('nth', () => {

  let list = ['foo', 'bar', 'baz', 'quux'];

  it('accepts positive offsets', () => {
    assert.strictEqual(nth(0, list), 'foo');
    assert.strictEqual(nth(1, list), 'bar');
    assert.strictEqual(nth(2, list), 'baz');
    assert.strictEqual(nth(3, list), 'quux');
    assert.strictEqual(nth(4, list), undefined);

    assert.strictEqual(nth(0, 'abc'), 'a');
    assert.strictEqual(nth(1, 'abc'), 'b');
    assert.strictEqual(nth(2, 'abc'), 'c');
    assert.strictEqual(nth(3, 'abc'), '');
  });

  it('accepts negative offsets', () => {
    assert.strictEqual(nth(-1, list), 'quux');
    assert.strictEqual(nth(-2, list), 'baz');
    assert.strictEqual(nth(-3, list), 'bar');
    assert.strictEqual(nth(-4, list), 'foo');
    assert.strictEqual(nth(-5, list), undefined);

    assert.strictEqual(nth(-1, 'abc'), 'c');
    assert.strictEqual(nth(-2, 'abc'), 'b');
    assert.strictEqual(nth(-3, 'abc'), 'a');
    assert.strictEqual(nth(-4, 'abc'), '');
  });

  it('throws if applied to null or undefined', () => {
    assert.throws(() => { nth(0, null); }, TypeError);
    assert.throws(() => { nth(0, undefined); }, TypeError);
  });

});
