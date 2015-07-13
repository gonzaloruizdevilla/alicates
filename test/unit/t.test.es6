let assert = require('chai').assert;

import {t} from '../../src/index.es6';

describe('t', () => {
  it('always returns true', () => {
    assert.strictEqual(t(), true);
    assert.strictEqual(t(10), true);
    assert.strictEqual(t(true), true);
  });
});
