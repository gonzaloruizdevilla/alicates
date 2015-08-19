let assert = require('chai').assert;

import {concat} from '../../src/index.es6';

describe('concat', () => {
  it('shoud combine arrays into one array with all the elements', () => {
    assert.deepEqual(concat([1,2,3],[4,5],[6]), [1,2,3,4,5,6]);
  });

  it('should be curried', () => {
    var fn = concat([1,2,3]);
    assert.deepEqual(fn([4,5]), [1,2,3,4,5]);
    assert.deepEqual(fn([4,5], [6]), [1,2,3,4,5,6]);
  });
});
