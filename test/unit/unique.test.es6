let assert = require('chai').assert;

import {unique} from '../../src/index.es6';

describe('unique', () => {
  it('should return a new array without repeated elements', () => {
      assert.deepEqual(unique([1,2,3,1,2,3,4]), [1,2,3,4]);
  });
});
