let assert = require('chai').assert;

import {test} from '../../src/index.es6';

describe('test', () => {
  it('returns true if string matches pattern', () => {
    assert.strictEqual(test(/^x/, 'xyz'), true);
  });

  it('returns false if string does not match pattern', () => {
    assert.strictEqual(test(/^y/, 'xyz'), false);
  });

  it('is referentially transparent', () => {
    var pattern = /x/g;
    assert.strictEqual(pattern.lastIndex, 0);
    assert.strictEqual(test(pattern, 'xyz'), true);
    assert.strictEqual(pattern.lastIndex, 0);
    assert.strictEqual(test(pattern, 'xyz'), true);
  });
});
