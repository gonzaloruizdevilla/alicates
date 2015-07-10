let assert = require('chai').assert;

import {not} from '../../src/index.es6';

describe('not', () => {
  it('should returns the ! of its argument', () => {
    assert.equal(not(true), false);
    assert.equal(not(false), true);
    assert.equal(not(0), true);
    assert.equal(not(1), false);
  });
});
