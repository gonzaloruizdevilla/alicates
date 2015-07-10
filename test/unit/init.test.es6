'use strict';
let assert = require('chai').assert;

import {init} from '../../src/index.es6';

describe('init', () => {
  it('should return all the elements of an array minus the last one', () => {
    assert.deepEqual(init([1,2,3]), [1,2]);
  });
});
