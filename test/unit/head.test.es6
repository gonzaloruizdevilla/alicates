'use strict';
let assert = require('chai').assert;

import {head} from '../../src/index.es6';

describe('head', () => {
  it('should return the first element of an array', () => {
    assert.equal(head([1,2,3]), 1);
  });
});
