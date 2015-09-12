let assert = require('chai').assert;

import {eqBy, identity, equals} from '../../src/index.es6';

describe('eqBy', () => {

  it('determines whether two values map to the same value in the codomain', () => {
    assert.strictEqual(eqBy(Math.abs, 5, 5), true);
    assert.strictEqual(eqBy(Math.abs, 5, -5), true);
    assert.strictEqual(eqBy(Math.abs, -5, 5), true);
    assert.strictEqual(eqBy(Math.abs, -5, -5), true);
    assert.strictEqual(eqBy(Math.abs, 42, 99), false);
  });

  it('has equals semantics', function() {
    class Just {
      constructor(x){
        this.value = x;
      }
      equals(x){
        return x instanceof Just && equals(x.value, this.value);
      }
    }

    assert.strictEqual(eqBy(identity, 0, -0), false);
    assert.strictEqual(eqBy(identity, -0, 0), false);
    assert.strictEqual(eqBy(identity, NaN, NaN), true);
    assert.strictEqual(eqBy(identity, new Just([42]), new Just([42])), true);
  });

});
