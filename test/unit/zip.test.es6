'use strict';
let assert = require('chai').assert;

import {zip} from '../../src/index.es6';


describe('zip', () => {
  it('should zip two arrays', () => {
    assert.deepEqual(zip([1,2,3],[4,5,6]), [[1,4], [2,5], [3,6]] );
  });

  it('should zip two arrays stopping with the shortest one', () => {
    assert.deepEqual(zip([1,2,3,4],[4,5,6]), [[1,4], [2,5], [3,6]] );
    assert.deepEqual(zip([1,2,3],[4,5,6,7]), [[1,4], [2,5], [3,6]] );
  });

  it('should return an empty array for empty lists', () => {
    assert.deepEqual(zip([],[]), []);
  });

  it('should be curried', () =>{
      assert.deepEqual(zip([1,2,3])([4,5,6]), [[1,4], [2,5], [3,6]] );
  });
});
