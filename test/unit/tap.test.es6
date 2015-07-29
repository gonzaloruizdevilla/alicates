let assert = require('chai').assert;

import {identity, tap} from '../../src/index.es6';


describe('tap', function() {
  it('returns a function that always returns its argument', () => {
    var f = tap(identity);
    assert.strictEqual(typeof f, 'function');
    assert.strictEqual(f(100), 100);
  });

  it('may take a function as the first argument that executes with tap\'s argument', () => {
    var sideEffect = 0;
    assert.strictEqual(sideEffect, 0);
    var rv = tap(function(x) { sideEffect = 'string ' + x; }, 200);
    assert.strictEqual(rv, 200);
    assert.strictEqual(sideEffect, 'string 200');
  });

});
