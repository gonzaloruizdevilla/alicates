let assert = require('chai').assert;

import {uniq} from '../../src/index.es6';

describe('uniq', () => {
  it('should return a new array without repeated elements', () => {
      assert.deepEqual(uniq([1,2,3,1,2,3,4]), [1,2,3,4]);
  });
});
