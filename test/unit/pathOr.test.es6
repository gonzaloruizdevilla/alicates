let assert = require('chai').assert;

import {pathOr} from '../../src/index.es6';

describe('pathOr', () => {
  var deepObject = {a: {b: {c: 'c'}}, falseVal: false, nullVal: null, undefinedVal: undefined, arrayVal: ['arr']};

  it('takes a path and an object and returns the value at the path or the default value', () => {
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
    assert.strictEqual(pathOr('Unknown', ['a', 'b', 'c'], obj), 100);
    assert.strictEqual(pathOr('Unknown', [], obj), obj);
    assert.strictEqual(pathOr('Unknown', ['a', 'e', 'f', '1'], obj), 101);
    assert.strictEqual(pathOr('Unknown', ['j', '0'], obj), 'J');
    assert.strictEqual(pathOr('Unknown', ['j', '1'], obj), 'Unknown');
    assert.strictEqual(pathOr('Unknown', ['a', 'b', 'c'], null), 'Unknown');
  });

  it('gets a deep property\'s value from objects', () => {
    assert.strictEqual(pathOr('Unknown', ['a', 'b', 'c'], deepObject), 'c');
    assert.strictEqual(pathOr('Unknown', ['a'], deepObject), deepObject.a);
  });

  it('returns the default value for items not found', () => {
    assert.strictEqual(pathOr('Unknown', ['a', 'b', 'foo'], deepObject), 'Unknown');
    assert.strictEqual(pathOr('Unknown', ['bar'], deepObject), 'Unknown');
  });

  it('returns the default value for null/undefined', () => {
    assert.strictEqual(pathOr('Unknown', ['toString'], null), 'Unknown');
    assert.strictEqual(pathOr('Unknown', ['toString'], undefined), 'Unknown');
  });

  it('works with falsy items', () => {
    assert.strictEqual(pathOr('Unknown', ['toString'], false), Boolean.prototype.toString);
  });

  it('is curried', () => {
    assert.strictEqual(pathOr('Unknown', ['arrayVal', '0'])(deepObject), 'arr');
  });
});
