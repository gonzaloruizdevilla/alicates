let assert = require('chai').assert;

import {f} from '../../src/index.es6';

describe('f', () => {
  it('always returns true', () => {
    assert.strictEqual(f(), false);
    assert.strictEqual(f(10), false);
    assert.strictEqual(f(true), false);
  });
});
