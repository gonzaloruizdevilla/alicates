let assert = require('chai').assert;

import {unfold} from '../../src/index.es6';

describe('unfold', () => {
  it('unfolds simple functions with a starting point to create a list', () => {
    assert.deepEqual(unfold(n => (n > 0 ? [n, n - 1] : null), 10), [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
  });

  it('is cool!', () => {
    /* jshint -W067 */
    let fib = n => (count => (
      count = 0,
      pair => (count += 1, (count <= n) ? [pair[0], [pair[1], pair[0] + pair[1]]] : null)
    ))();
    /* jshint +W067 */
    assert.deepEqual(unfold(fib(10), [0, 1]), [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
  });

  it('is curried', () => {
    let countdown = unfold(n => (n > 0 ? [n, n - 1] : undefined));
    assert.deepEqual(countdown(10), [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
  });

});
