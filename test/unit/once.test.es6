'use strict';
let assert = require('chai').assert;

import {once} from '../../src/index.es6';

describe('once', () => {
  it('returns a function that calls the supplied function only once', () => {
    let fn;
    {
      let value = 0;
      fn = () => (value = value + 1);
    }
    let onceFn = once(fn);
    assert.equal(onceFn(), 1);
    assert.equal(onceFn(), 1);
    assert.equal(onceFn(), 1);
  });

  it('passes along arguments supplied', function() {
    let fn = once((a, b) => a + b);
    assert.strictEqual(fn(5, 10), 15);
  });

  it('retains and returns the first value calculated, even if different arguments are passed later', () => {
    var fn = once((a, b) => a + b);
    assert.equal(fn(5, 10), 15);
    assert.equal(fn(5, 20), 15);
  });
});
