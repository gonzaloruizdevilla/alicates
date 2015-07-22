let assert = require('chai').assert;

import {zipWith} from '../../src/index.es6';

describe('zipWith', () => {
  let a = [1, 2, 3], b = [100, 200, 300], c = [10, 20, 30, 40, 50, 60];
  let add = (a, b) => a + b;
  let x = (a, b) => a * b;
  let s = (a, b) => a + ' cow ' + b;

  it('returns an array created by applying its passed-in function pair-wise on its passed in arrays', () => {
    assert.deepEqual(zipWith(add, a, b), [101, 202, 303]);
    assert.deepEqual(zipWith(x, a, b), [100, 400, 900]);
    assert.deepEqual(zipWith(s, a, b), ['1 cow 100', '2 cow 200', '3 cow 300']);
  });

  it('returns an array whose length is equal to the shorter of its input arrays', () => {
    assert.strictEqual(zipWith(add, a, c).length, a.length);
  });
});
