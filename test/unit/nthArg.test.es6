let assert = require('chai').assert;

import {nthArg} from '../../src/index.es6';

describe('nthArg', function() {
  it('returns a function which returns its nth argument', () => {
    assert.strictEqual(nthArg(0)('foo', 'bar'), 'foo');
    assert.strictEqual(nthArg(1)('foo', 'bar'), 'bar');
    assert.strictEqual(nthArg(2)('foo', 'bar'), undefined);
  });

  it('accepts negative offsets', () => {
    assert.strictEqual(nthArg(-1)('foo', 'bar'), 'bar');
    assert.strictEqual(nthArg(-2)('foo', 'bar'), 'foo');
    assert.strictEqual(nthArg(-3)('foo', 'bar'), undefined);
  });

  it('returns a function with length 0', () => {
    assert.strictEqual(nthArg(2).length, 0);
  });
});
