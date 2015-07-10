let assert = require('chai').assert;

import {last} from '../../src/index.es6';

describe('last', () => {
  it('should return the last element of an array', () => {
    assert.equal(last([1,2,3]), 3);
  });
});
