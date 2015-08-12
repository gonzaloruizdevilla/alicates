let assert = require('chai').assert;

import {pathEq, equals} from '../../src/index.es6';

describe('pathEq', function() {

  var obj = {
    a: 1,
    b: {
      ba: '2'
    }
  };

  it('returns true if the path matches the value', function() {
    assert.strictEqual(pathEq(['a'], 1, obj), true);
    assert.strictEqual(pathEq(['b', 'ba'], '2', obj), true);
  });

  it('returns false for non matches', function() {
    assert.strictEqual(pathEq(['a'], '1', obj), false);
    assert.strictEqual(pathEq(['b', 'ba'], 2, obj), false);
  });

  it('returns false for non existing values', function() {
    assert.strictEqual(pathEq(['c'], 'foo', obj), false);
    assert.strictEqual(pathEq(['c', 'd'], 'foo', obj), false);
  });

  it('accepts empty path', function() {
    assert.strictEqual(pathEq([], 42, {a: 1, b: 2}), false);
    assert.strictEqual(pathEq([], obj, obj), true);
  });

  it('has equals semantics', function() {
    function Just(x) { this.value = x; }
    Just.prototype.equals = function(x) {
      return x instanceof Just && equals(x.value, this.value);
    };

    assert.strictEqual(pathEq(['value'], 0, {value: -0}), false);
    assert.strictEqual(pathEq(['value'], -0, {value: 0}), false);
    assert.strictEqual(pathEq(['value'], NaN, {value: NaN}), true);
    assert.strictEqual(pathEq(['value'], new Just([42]), {value: new Just([42])}), true);
  });

});
