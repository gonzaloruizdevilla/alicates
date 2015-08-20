let assert = require('chai').assert;

import {merge, __} from '../../src/index.es6';

describe('merge', () => {
  it('takes two objects, merges their own properties and returns a new object', () => {
    var a = {w: 1, x: 2};
    var b = {y: 3, z: 4};
    assert.deepEqual(merge(a, b), {w: 1, x: 2, y: 3, z: 4});
  });

  it('overrides properties in the first object with properties in the second object', () => {
    var a = {w: 1, x: 2};
    var b = {w: 100, y: 3, z: 4};
    assert.deepEqual(merge(a, b), {w: 100, x: 2, y: 3, z: 4});
  });

  it('is not destructive', () => {
    var a = {w: 1, x: 2};
    var res = merge(a, {x: 5});
    assert.notStrictEqual(a, res);
    assert.deepEqual(res, {w: 1, x: 5});
  });

  it('reports only own properties', () => {
    var a = {w: 1, x: 2};
    function Cla() {}
    Cla.prototype.x = 5;
    assert.deepEqual(merge(new Cla(), a), {w: 1, x: 2});
    assert.deepEqual(merge(a, new Cla()), {w: 1, x: 2});
  });

  it('is curried', () => {
    var curried = merge({w: 1, x: 2});
    var b = {y: 3, z: 4};
    assert.deepEqual(curried(b), {w: 1, x: 2, y: 3, z: 4});
  });


  it('is curried', () => {
    var curried = merge(__, {w: 1, x: 2});
    assert.deepEqual(curried({x: 3, y: 4}), {w: 1, x: 2, y: 4});
  });
});
