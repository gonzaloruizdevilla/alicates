let assert = require('chai').assert;

import {pipeP} from '../../src/index.es6';

describe('pipeP', function() {

  it('is a variadic function', function() {
    assert.strictEqual(typeof pipeP, 'function');
    assert.strictEqual(pipeP.length, 0);
  });

  it('performs left-to-right composition of Promise-returning functions', function() {
    var f = function(a) { return new Promise(function(resolve) { resolve([a]); }); };
    var g = function(a, b) { return new Promise(function(resolve) { resolve([a, b]); }); };
    var h = function(a, b, c) { return new Promise(function(resolve) { resolve([a, b, c]); }); };

    assert.strictEqual(pipeP(f, f, f).length, 1);
    assert.strictEqual(pipeP(g, f, f).length, 2);
    assert.strictEqual(pipeP(h, f, f).length, 3);

    pipeP(f, f, f)(1).then(function(result) {
      assert.deepEqual(result, [[[1]]]);
    });

    pipeP(g, f, f)(1)(2).then(function(result) {
      assert.deepEqual(result, [[[1, 2]]]);
    });

    pipeP(h, f, f)(1)(2)(3).then(function(result) {
      assert.deepEqual(result, [[[1, 2, 3]]]);
    });
  });

  it('throws if given no arguments', function() {
    assert.throws(
      function() { pipeP(); },
      Error,
      'pipeP requires at least one argument'
    );
  });

});
