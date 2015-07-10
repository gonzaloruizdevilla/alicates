'use strict';
let assert = require('chai').assert;

import {tail} from '../../src/index.es6';

describe('tail', () => {
  it('should return all the elements of an array minus the first one', () => {
    assert.deepEqual(tail([1,2,3]), [2,3]);
  });
});
