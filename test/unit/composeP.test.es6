let assert = require('chai').assert;

import {composeP} from '../../src/index.es6';

describe('composeP', () => {

  it('is a variadic function', () => {
    assert.strictEqual(typeof composeP, 'function');
    assert.strictEqual(composeP.length, 0);
  });

  it('performs right-to-left composition of Promise-returning functions', () => {
    let f = a => new Promise(res => res([a]));
    let g = (a, b) => new Promise(res => res([a, b]));
    let h = (a, b, c) => new Promise(res => res([a, b, c]));

    assert.strictEqual(composeP(f, f, f).length, 1);
    assert.strictEqual(composeP(f, f, g).length, 2);
    assert.strictEqual(composeP(f, f, h).length, 3);

    composeP(f, f, f)(1).then(function(result) {
      assert.deepEqual(result, [[[1]]]);
    });

    composeP(f, f, g)(1)(2).then(function(result) {
      assert.deepEqual(result, [[[1, 2]]]);
    });

    composeP(f, f, h)(1)(2)(3).then(function(result) {
      assert.deepEqual(result, [[[1, 2, 3]]]);
    });
  });

  it('throws if given no arguments', () => {
    assert.throws(
      () => composeP(),
      Error,
      'composeP requires at least one argument'
    );
  });

});
