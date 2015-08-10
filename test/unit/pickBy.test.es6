let assert = require('chai').assert;

import {always, pickBy, t} from '../../src/index.es6';

describe('pickBy', () => {
  var obj = {a: 1, b: 2, c: 3, d: 4, e: 5, f: 6};

  it('creates a copy of the object', () => {
    assert.notStrictEqual(pickBy(always(true), obj), obj);
  });

  it('when returning truthy, keeps the key', () => {
    assert.deepEqual(pickBy(t, obj), obj);
    assert.deepEqual(pickBy(always({}), obj), obj);
    assert.deepEqual(pickBy(always(1), obj), obj);
  });

  it('when returning falsy, removes the key', () => {
    assert.deepEqual(pickBy(always(false), obj), {});
    assert.deepEqual(pickBy(always(0), obj), {});
    assert.deepEqual(pickBy(always(null), obj), {});
  });

  it('is called with (val,key,obj)', () => {
    assert.deepEqual(pickBy(function(val, key, _obj) {
      assert.strictEqual(_obj, obj);
      return key === 'd' && val === 4;
    }, obj), {d: 4});
  });

  it('retrieves prototype properties', () => {
    var F = function(param) {this.x = param;};
    F.prototype.y = 40; F.prototype.z = 50;
    var obj = new F(30);
    obj.v = 10; obj.w = 20;
    assert.deepEqual(pickBy(function(val) {return val < 45;}, obj), {v: 10, w: 20, x: 30, y: 40});
  });


  it('is curried', () => {
    var copier = pickBy(t);
    assert.deepEqual(copier(obj), obj);
  });
});
