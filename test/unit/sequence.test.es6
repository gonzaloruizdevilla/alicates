'use strict';
let assert = require('chai').assert;

import {sequence} from '../../src/index.es6';

describe('sequence', () => {
  it('should create a function that executes a list in functions in sequence', () =>{
    const add3 = a => a + 3;
    const mult10 = a => a * 10;
    const seq = sequence(add3, mult10);
    const result = seq(2);
    assert.equal(result, 50);
  });
});
