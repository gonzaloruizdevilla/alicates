let assert = require('chai').assert;

import {add, map} from '../../src/index.es6';

describe('map', () => {
  it('should map arrays', () =>{
    const result = map(add(2), [0,1,2]);
    assert.deepEqual(result, [2,3,4]);
  });

  it('should be curried', () =>{
    const result = map(add(2))([0,1,2]);
    assert.deepEqual(result, [2,3,4]);
  });
});
