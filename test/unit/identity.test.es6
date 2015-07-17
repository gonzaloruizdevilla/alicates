let assert = require('chai').assert;

import {identity} from '../../src/index.es6';

describe('identity', () => {
  it('returns its first argument', () => {
    assert.strictEqual(identity(undefined), undefined);
    assert.strictEqual(identity('foo'), 'foo');
    assert.strictEqual(identity('foo', 'bar'), 'foo');
  });

  it('has length 1', () => {
    assert.strictEqual(identity.length, 1);
  });
});
