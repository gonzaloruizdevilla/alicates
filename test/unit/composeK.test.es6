let assert = require('chai').assert;

import {compose, chain, composeK, __} from '../../src/index.es6';

var Identity = function(x) {
  this.value = x;
};

Identity.prototype.chain = function(f) {
  return f(this.value);
};

describe('composeK', () => {

  it('is a variadic function', () => {
    assert.strictEqual(typeof composeK, 'function');
    assert.strictEqual(composeK.length, 0);
  });

  it('performs right-to-left Kleisli composition', () => {
    var f = function(x) { return new Identity(x - 1); };
    var g = function(x) { return new Identity(x * x); };
    var h = function(x) { return new Identity(x + 1); };

    var fn = composeK(h, g, f);
    var id = new Identity(8);

    assert.strictEqual(fn(id).value, 50);
    assert.strictEqual(fn(id).value, compose(chain(h), chain(g), chain(f))(id).value);
  });

  it('returns the identity function given no arguments', () => {
    var identity = composeK();
    assert.strictEqual(identity.length, 1);
    assert.strictEqual(identity(__).length, 1);
    assert.strictEqual(identity(42), 42);
  });

});
