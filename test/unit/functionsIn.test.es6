let assert = require('chai').assert;

import {functionsIn} from '../../src/index.es6';

describe('functionsIn', () => {

  function F() {
    this.sort = function() {};
    this.map = function() {};
    this.obj = {};
    this.num = 4;
  }

  F.prototype.x = function() {};
  F.prototype.y = function() {};
  F.prototype.z = {};

  var f = new F();

  it('returns list of functions with prototype functions', () => {
    assert.deepEqual(functionsIn(f).sort(), ['map', 'sort', 'x', 'y']);
    assert.strictEqual(functionsIn(f).length, 4);
  });

  it('returns an empty array if there are no functions on the object or its prototype chain', () => {
    function G() {}
    assert.deepEqual(functionsIn(new G()), []);
  });
});
