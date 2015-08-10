let assert = require('chai').assert;

import {chain, pipe, pipeK} from '../../src/index.es6';


var Identity = function(x) {
  this.value = x;
};

Identity.prototype.chain = function(f) {
  return f(this.value);
};


describe('pipeK', function() {

  it('is a variadic function', function() {
    assert.strictEqual(typeof pipeK, 'function');
    assert.strictEqual(pipeK.length, 0);
  });

  it('performs left-to-right Kleisli composition', function() {
    var f = function(x) { return new Identity(x - 1); };
    var g = function(x) { return new Identity(x * x); };
    var h = function(x) { return new Identity(x + 1); };

    var fn = pipeK(f, g, h);
    var id = new Identity(8);

    assert.strictEqual(fn(id).value, 50);
    assert.strictEqual(fn(id).value, pipe(chain(f), chain(g), chain(h))(id).value);
  });


  it('returns the identity function given no arguments', function() {
    var identity = pipeK();
    assert.strictEqual(identity.length, 1);
    //assert.strictEqual(identity(__).length, 1);
    assert.strictEqual(identity(42), 42);
  });

});
