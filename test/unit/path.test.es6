let assert = require('chai').assert;

import {path} from '../../src/index.es6';

describe('path', () => {
  var deepObject = {a: {b: {c: 'c'}}, falseVal: false, nullVal: null, undefinedVal: undefined, arrayVal: ['arr']};
  it('takes a path and an object and returns the value at the path or undefined', () => {
    var obj = {
      a: {
        b: {
          c: 100,
          d: 200
        },
        e: {
          f: [100, 101, 102],
          g: 'G'
        },
        h: 'H'
      },
      i: 'I',
      j: ['J']
    };
    assert.strictEqual(path(['a', 'b', 'c'], obj), 100);
    assert.strictEqual(path([], obj), obj);
    assert.strictEqual(path(['a', 'e', 'f', '1'], obj), 101);
    assert.strictEqual(path(['j', '0'], obj), 'J');
    assert.strictEqual(path(['j', '1'], obj), undefined);
    assert.strictEqual(path(['a', 'b', 'c'], null), undefined);
  });

  it('gets a deep property\'s value from objects', () => {
    assert.strictEqual(path(['a', 'b', 'c'], deepObject), 'c');
    assert.strictEqual(path(['a'], deepObject), deepObject.a);
  });

  it('returns undefined for items not found', () => {
    assert.strictEqual(path(['a', 'b', 'foo'], deepObject), undefined);
    assert.strictEqual(path(['bar'], deepObject), undefined);
  });

  it('returns undefined for null/undefined', () => {
    assert.strictEqual(path(['toString'], null), undefined);
    assert.strictEqual(path(['toString'], undefined), undefined);
  });

  it('works with falsy items', () => {
    assert.strictEqual(path(['toString'], false), Boolean.prototype.toString);
  });

  it('is curried', () => {
    assert.strictEqual(path(['arrayVal', '0'])(deepObject), 'arr');
  });
});
