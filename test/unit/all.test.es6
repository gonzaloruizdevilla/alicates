let assert = require('chai').assert;

import {all, into, Nil, cons} from '../../src/index.es6';

describe('all', () => {
  const pred = a => a > 2;
  it('should return true if and only if all the values match the predicate', () => {
    assert.notOk(all(pred, [1,2,3]));
    assert.ok(all(pred, [3,3,3]));
  });

  it('should return true on an empty list', () => {
    assert.ok(all(pred, []));
  });

  it('should be curried', () => {
    assert.ok(all(pred)([3,3,3]));
  });

  it('works with more complex objects', () => {
    var xs = [{x: 'abc'}, {x: 'ade'}, {x: 'fghiajk'}];
    function len3(o) { return o.x.length === 3; }
    function hasA(o) { return o.x.indexOf('a') > -1; }
    assert.strictEqual(all(len3, xs), false);
    assert.strictEqual(all(hasA, xs), true);
  });

  it('can act as a transformer', () => {
    let odd = n => n % 2;
    assert.deepEqual(into([], all(odd), [3,5,7]), [true]);
    assert.deepEqual(into([], all(odd), [3,6,2]), [false]);
    assert.deepEqual(into(Nil, all(odd), [3,5,7]), cons(true, Nil));
    assert.deepEqual(into(Nil, all(odd), [3,6,7]), cons(false, Nil));
  });
});
