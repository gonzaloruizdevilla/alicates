let assert = require('chai').assert;

import {add, ap} from '../../src/index.es6';

describe('ap', () => {
  const mult10 = x => x * 10;
  const add3 = add(3);

  it('should apply a list of functions to a list of values', () => {
    assert.deepEqual(ap([mult10, add3], [1, 2, 3]), [10, 20, 30, 4, 5, 6]);
  });


  it('dispatches to the passed object\'s ap method when values is a non-Array object', () => {
    var obj = {ap: function(n) { return 'called ap with ' + n; }};
    assert.deepEqual(ap(obj, 10), obj.ap(10));
  });

  it('is curried', () => {
    var val = ap([mult10, add3]);
    assert.strictEqual(typeof val, 'function');
    assert.deepEqual(val([1, 2, 3]), [10, 20, 30, 4, 5, 6]);
  });
});
