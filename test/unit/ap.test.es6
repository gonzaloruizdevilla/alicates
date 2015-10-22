let assert = require('chai').assert;

import {add, ap} from '../../src/index.es6';

describe('ap', () => {
  const mult10 = x => x * 10;
  const add3 = add(3);

  it('interprets [a] as an applicative', () => {
    assert.deepEqual(ap([mult10, add3], [1, 2, 3]), [10, 20, 30, 4, 5, 6]);
  });

  it('interprets ((->) r) as an applicative', function() {
    var f = function(r) {
      return function(a) {
        return r + a;
      };
    };
    var g = function(r) { return r * 2; };
    var h = ap(f, g);
    // (<*>) :: (r -> a -> b) -> (r -> a) -> (r -> b)
    // f <*> g = \x -> f x (g x)
    assert.strictEqual(h(10), 10 + (10 * 2));
  });

  it('dispatches to the passed object\'s ap method when values is a non-Array object', () => {
    var obj = {ap: function(n) { return 'called ap with ' + n; }};
    assert.deepEqual(ap(obj, 10), obj.ap(10));
  });

  it('is curried', () => {
    var val = ap([mult10, add3]);
    assert.strictEqual(typeof val, 'function');
    assert.deepEqual(val([1, 2, 3]), [10, 20, 30, 4, 5, 6]);
  });
});
