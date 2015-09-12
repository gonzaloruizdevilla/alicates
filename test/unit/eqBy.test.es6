let assert = require('chai').assert;

import {eqBy, identity, equals} from '../../src/index.es6';

describe('eqBy', function() {

  it('determines whether two values map to the same value in the codomain', function() {
    assert.strictEqual(eqBy(Math.abs, 5, 5), true);
    assert.strictEqual(eqBy(Math.abs, 5, -5), true);
    assert.strictEqual(eqBy(Math.abs, -5, 5), true);
    assert.strictEqual(eqBy(Math.abs, -5, -5), true);
    assert.strictEqual(eqBy(Math.abs, 42, 99), false);
  });

  it('has equals semantics', function() {
    function Just(x) { this.value = x; }
    Just.prototype.equals = function(x) {
      return x instanceof Just && equals(x.value, this.value);
    };

    assert.strictEqual(eqBy(identity, 0, -0), false);
    assert.strictEqual(eqBy(identity, -0, 0), false);
    assert.strictEqual(eqBy(identity, NaN, NaN), true);
    assert.strictEqual(eqBy(identity, new Just([42]), new Just([42])), true);
  });

});
