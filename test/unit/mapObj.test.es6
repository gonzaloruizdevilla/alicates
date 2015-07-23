let assert = require('chai').assert;

import {mapObj} from '../../src/index.es6'

describe('mapObj', () => {
  var square = n => n * n;

  it('runs the given function over each of the object properties', () => {
    var obj = {a: 1, b: 2, c: 3};
    assert.deepEqual(mapObj(square, obj), {a: 1, b: 4, c: 9});
  });
});
