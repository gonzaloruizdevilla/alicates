let assert = require('chai').assert;

import {functions, add, reduce} from '../../src/index.es6';

describe('functions', () => {

  function F() {
    this.sort = function() {};
    this.map = function() {};
    this.obj = {};
    this.num = 4;
  }

  F.prototype.x = function() {};
  F.prototype.y = function() {};
  F.prototype.z = {};

  let f = new F();

  it('returns list of functions without prototype functions', () => {
    assert.deepEqual(functions(f).sort(), ['map', 'sort']);
    assert.strictEqual(functions(f).length, 2);
    assert.deepEqual(functions({add: add, reduce: reduce}).sort(), ['add', 'reduce']);
  });

  it('returns an empty array if there are no functions on the object or its prototype chain', () => {
    function G() {}
    assert.deepEqual(functions(new G()), []);
  });
});
