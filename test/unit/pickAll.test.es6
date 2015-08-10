let assert = require('chai').assert;

import {pickAll} from '../../src/index.es6';

describe('pickAll', function() {
  var obj = {a: 1, b: 2, c: 3, d: 4, e: 5, f: 6};
  it('copies the named properties of an object to the new object', function() {
    assert.deepEqual(pickAll(['a', 'c', 'f'], obj), {a: 1, c: 3, f: 6});
  });

  it('includes properties not present on the input object', function() {
    assert.deepEqual(pickAll(['a', 'c', 'g'], obj), {a: 1, c: 3, g: undefined});
  });

  it('is curried', function() {
    var copyAB = pickAll(['a', 'b']);
    assert.deepEqual(copyAB(obj), {a: 1, b: 2});
  });
});
