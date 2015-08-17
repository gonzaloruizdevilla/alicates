let assert = require('chai').assert;

import {forEach} from '../../src/index.es6';

describe('forEach', () => {
  let list = [{x: 1, y: 2}, {x: 100, y: 200}, {x: 300, y: 400}, {x: 234, y: 345}];

  it('performs the passed in function on each element of the list', () => {
    let sideEffect = {};
    forEach(elem => (sideEffect[elem.x] = elem.y), list);
    assert.deepEqual(sideEffect, {1: 2, 100: 200, 300: 400, 234: 345});
  });

  it('returns the original list', () => {
    let s = '';
    assert.deepEqual(forEach(obj => (s += obj.x), list), list);
    assert.strictEqual('1100300234', s);
  });

  it('handles empty list', () => {
    assert.deepEqual(forEach(x => x * x, []), []);
  });

  it('dispatches to `forEach` method', () => {
    let dispatched = false;
    let fn = () => {};
    function DummyList() {}
    DummyList.prototype.forEach = function(callback) {
      dispatched = true;
      assert.strictEqual(callback, fn);
    };
    forEach(fn, new DummyList());
    assert.strictEqual(dispatched, true);
  });

  it('is curried', () => {
    let xStr = '';
    let xe = forEach(x => xStr += (x + ' '));
    assert.strictEqual(typeof xe, 'function');
    xe([1, 2, 4]);
    assert.strictEqual(xStr, '1 2 4 ');
  });
});
