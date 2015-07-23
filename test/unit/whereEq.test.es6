let assert = require('chai').assert;

import * as alicates from '../../src/index.es6';
import {whereEq} from '../../src/index.es6';

describe('whereEq', () => {

  it('returns true if the test object satisfies the spec', () => {
    let spec = {x: 1, y: 2};
    let test1 = {x: 0, y: 200};
    let test2 = {x: 0, y: 10};
    let test3 = {x: 1, y: 101};
    let test4 = {x: 1, y: 2};
    assert.strictEqual(whereEq(spec, test1), false);
    assert.strictEqual(whereEq(spec, test2), false);
    assert.strictEqual(whereEq(spec, test3), false);
    assert.strictEqual(whereEq(spec, test4), true);
  });

  it('does not need the spec and the test object to have the same interface (the test object will have a superset of the specs properties)', () => {
    let spec = {x: 100};
    let test1 = {x: 20, y: 100, z: 100};
    let test2 = {w: 1, x: 100, y: 100, z: 100};

    assert.strictEqual(whereEq(spec, test1), false);
    assert.strictEqual(whereEq(spec, test2), true);
  });

  it('matches specs that have undefined properties', () => {
    let spec = {x: undefined};
    let test1 = {};
    let test2 = {x: null};
    let test3 = {x: undefined};
    let test4 = {x: 1};
    assert.strictEqual(whereEq(spec, test1), true);
    assert.strictEqual(whereEq(spec, test2), false);
    assert.strictEqual(whereEq(spec, test3), true);
    assert.strictEqual(whereEq(spec, test4), false);
  });

  it('is curried', () => {
    let predicate = whereEq({x: 1, y: 2});
    assert.strictEqual(predicate({x: 1, y: 2, z: 3}), true);
    assert.strictEqual(predicate({x: 3, y: 2, z: 1}), false);
  });

  it('is true for an empty spec', () => {
    assert.strictEqual(whereEq({}, {a: 1}), true);
    assert.strictEqual(whereEq(null, {a: 1}), true);
  });

  it('reports true when the object equals the spec', () => {
    assert.strictEqual(whereEq(alicates, alicates), true);
  });

  function Parent() {
    this.y = 6;
  }
  Parent.prototype.a = undefined;
  Parent.prototype.x = 5;
  let parent = new Parent();

  it('matches inherited props', () => {
    assert.strictEqual(whereEq({y: 6}, parent), true);
    assert.strictEqual(whereEq({x: 5}, parent), true);
    assert.strictEqual(whereEq({x: 5, y: 6}, parent), true);
    assert.strictEqual(whereEq({x: 4, y: 6}, parent), false);
  });

  it('does not match inherited spec', () => {
    assert.strictEqual(whereEq(parent, {y: 6}), true);
    assert.strictEqual(whereEq(parent, {x: 5}), false);
  });

});
