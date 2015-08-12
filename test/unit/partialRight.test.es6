let assert = require('chai').assert;

import {partialRight} from '../../src/index.es6';

describe('partialRight', () => {
  let disc = (a, b, c) => b * b - 4 * a * c;

  it('caches the initially supplied right-most parameters in the generated function', () => {
    let f = partialRight(disc, 4);
    assert.strictEqual(f(3, 7), 1);
    let g = partialRight(disc, 7, 4);
    assert.strictEqual(g(3), 1);
  });

  it('correctly reports the arity of the new function', () => {
    let f = partialRight(disc, 4);
    assert.strictEqual(f.length, 2);
    let g = partialRight(disc, 7, 4);
    assert.strictEqual(g.length, 1);
  });
});
