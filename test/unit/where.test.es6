let assert = require('chai').assert;

import {equals, where} from '../../src/index.es6';

describe('where', () => {

  it('returns true if the test object satisfies the spec', () => {
    let spec = {x: equals(1), y: equals(2)};
    let test1 = {x: 0, y: 200};
    let test2 = {x: 0, y: 10};
    let test3 = {x: 1, y: 101};
    let test4 = {x: 1, y: 2};
    assert.strictEqual(where(spec, test1), false);
    assert.strictEqual(where(spec, test2), false);
    assert.strictEqual(where(spec, test3), false);
    assert.strictEqual(where(spec, test4), true);
  });

  it('does not need the spec and the test object to have the same interface (the test object will have a superset of the specs properties)', () => {
    let spec = {x: equals(100)};
    let test1 = {x: 20, y: 100, z: 100};
    let test2 = {w: 1, x: 100, y: 100, z: 100};

    assert.strictEqual(where(spec, test1), false);
    assert.strictEqual(where(spec, test2), true);
  });

  it('matches specs that have undefined properties', () => {
    let spec = {x: equals(undefined)};
    let test1 = {};
    let test2 = {x: null};
    let test3 = {x: undefined};
    let test4 = {x: 1};
    assert.strictEqual(where(spec, test1), true);
    assert.strictEqual(where(spec, test2), false);
    assert.strictEqual(where(spec, test3), true);
    assert.strictEqual(where(spec, test4), false);
  });

  it('is curried', () => {
    let predicate = where({x: equals(1), y: equals(2)});
    assert.strictEqual(predicate({x: 1, y: 2, z: 3}), true);
    assert.strictEqual(predicate({x: 3, y: 2, z: 1}), false);
  });

  it('is true for an empty spec', () => {
    assert.strictEqual(where({}, {a: 1}), true);
    assert.strictEqual(where(null, {a: 1}), true);
  });

  it('matches inherited properties', () => {
    let spec = {
      toString: equals(Object.prototype.toString),
      valueOf: equals(Object.prototype.valueOf)
    };
    assert.strictEqual(where(spec, {}), true);
  });

  it('does not match inherited spec', () => {
    function Spec() { this.y = equals(6); }
    Spec.prototype.x = equals(5);
    let spec = new Spec();

    assert.strictEqual(where(spec, {y: 6}), true);
    assert.strictEqual(where(spec, {x: 5}), false);
  });

});
