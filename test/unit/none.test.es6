'use strict';
let assert = require('chai').assert;

import {none} from '../../src/index.es6';

describe('none', () => {
  const pred = a => a > 2;

  it('should return true if none of the values match the predicate', () => {
    assert.notOk(none(pred, [1,1,3]));
    assert.ok(none(pred, [1,1,1]));
  });

  it('should return true on an empty list', () => {
    assert.ok(none(pred, []));
  });

  it('should be curried', () =>{
    assert.ok(none(pred)([1,1,1]));
  });
});
