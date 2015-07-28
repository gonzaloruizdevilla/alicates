let assert = require('chai').assert;

import {toUpper} from '../../src/index.es6';

describe('toUpper', function() {
  it('returns the upper-case equivalent of the input string', function() {
    assert.strictEqual(toUpper('abc'), 'ABC');
  });
});
