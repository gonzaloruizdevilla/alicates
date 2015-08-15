let assert = require('chai').assert;

import {indexOf, invert, keys, is} from '../../src/index.es6';

describe('invert', function() {

  it('takes a list or object and returns an object of lists', function() {
    assert.equal(typeof invert([]), 'object');
    assert.equal(typeof invert({}), 'object');

    var inverted = invert([0]);
    var invertedKeys = keys(inverted);
    assert.strictEqual(is(Array, inverted[invertedKeys.pop()]), true);
  });

  it('returns an empty object when applied to a primitive', function() {
    assert.deepEqual(invert(42), {});
    assert.deepEqual(invert('abc'), {});
  });

  it('returns an empty object when applied to null/undefined', function() {
    assert.deepEqual(invert(null), {});
    assert.deepEqual(invert(undefined), {});
  });

  it('returns the input\'s values as keys, and keys as values of an array', function() {
    assert.deepEqual(invert(['a', 'b', 'c']),       {a:['0'], b:['1'], c:['2']});
    assert.deepEqual(invert({x:'a', y:'b', z:'c'}), {a:['x'], b:['y'], c:['z']});
  });

  it('puts keys that have the same value into the appropriate an array', function() {
    assert.deepEqual(invert(['a', 'b', 'a']), {a:['0', '2'], b:['1']});

    var inverted = invert({x:'a', y:'b', z:'a', _id:'a'});
    assert.strictEqual(indexOf('x', inverted.a) >= 0, true);
    assert.strictEqual(indexOf('z', inverted.a) >= 0, true);
    assert.strictEqual(indexOf('_id', inverted.a) >= 0, true);
    assert.deepEqual(inverted.b, ['y']);
  });

  // this one is more of a sanity check
  it('is not destructive', function() {
    var input = {x:'a', y:'b', z:'a', _id:'a'};
    invert(input);
    assert.deepEqual(input, {x:'a', y:'b', z:'a', _id:'a'});
  });

  it('ignores inherited properties', function() {
    assert.deepEqual(invert({x: 'hasOwnProperty'}), {
      /* jshint -W001 */
      hasOwnProperty: ['x']
      /* jshint +W001 */
    });
  });
});
