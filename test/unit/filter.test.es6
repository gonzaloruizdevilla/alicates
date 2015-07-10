'use strict';
let assert = require('chai').assert;

import {filter} from '../../src/index.es6';

describe('filter', () => {
  const criteria =  a => a > 1;

  it('should filter arrays', () => {
    const result = filter(criteria, [0,1,2]);
    assert.deepEqual(result, [2]);
  });

  it('should be curried', () => {
    const result = filter(criteria)([0,1,2]);
    assert.deepEqual(result, [2]);
  });
});
