let assert = require('chai').assert;

import {pick} from '../../src/index.es6';


describe('pick', () => {
  var obj = {a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, 1: 7};

  it('copies the named properties of an object to the new object', () => {
    assert.deepEqual(pick(['a', 'c', 'f'], obj), {a: 1, c: 3, f: 6});
  });

  it('handles numbers as properties', () => {
    assert.deepEqual(pick([1], obj), {1: 7});
  });

  it('ignores properties not included', () => {
    assert.deepEqual(pick(['a', 'c', 'g'], obj), {a: 1, c: 3});
  });

  it('retrieves prototype properties', () => {
    var F = function(param) {this.x = param;};
    F.prototype.y = 40; F.prototype.z = 50;
    var obj = new F(30);
    obj.v = 10; obj.w = 20;
    assert.deepEqual(pick(['w', 'x', 'y'], obj), {w: 20, x: 30, y: 40});
  });

  it('is curried', () => {
    var copyAB = pick(['a', 'b']);
    assert.deepEqual(copyAB(obj), {a: 1, b: 2});
  });
});
