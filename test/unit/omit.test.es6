let assert = require('chai').assert;

import {omit} from '../../src/index.es6';

describe('omit', () => {
  var obj = {a: 1, b: 2, c: 3, d: 4, e: 5, f: 6};

  it('copies an object omitting the listed properties', () => {
    assert.deepEqual(omit(['a', 'c', 'f'], obj), {b: 2, d: 4, e: 5});
  });

  it('includes prototype properties', () => {
    let F = function(param) {this.x = param;};
    F.prototype.y = 40; F.prototype.z = 50;
    let obj = new F(30);
    obj.v = 10; obj.w = 20;
    assert.deepEqual(omit(['w', 'x', 'y'], obj), {v: 10, z: 50});
  });

  it('is curried', () => {
    let skipAB = omit(['a', 'b']);
    assert.deepEqual(skipAB(obj), {c: 3, d: 4, e: 5, f: 6});
  });
});
