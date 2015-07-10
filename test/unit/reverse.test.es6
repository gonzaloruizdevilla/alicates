'use strict';
let assert = require('chai').assert;

import {reverse} from '../../src/index.es6';


describe('reverse', () => {
  it('should reverse arrays', () =>{
    const result = reverse([0,1,2]);
    assert.deepEqual(result, [2,1,0]);
  });
});
