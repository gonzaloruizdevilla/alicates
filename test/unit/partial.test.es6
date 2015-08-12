let assert = require('chai').assert;

import {partial} from '../../src/index.es6';

describe('partial', () => {
  let disc = (a, b, c)  => b * b - 4 * a * c;

  it('caches the initially supplied left-most parameters in the generated function', () => {
    let f = partial(disc, 3);
    assert.strictEqual(f(7, 4), 1);
    let g = partial(disc, 3, 7);
    assert.strictEqual(g(4), 1);
  });

  it('correctly reports the arity of the new function', () => {
    let f = partial(disc, 3);
    assert.strictEqual(f.length, 2);
    let g = partial(disc, 3, 7);
    assert.strictEqual(g.length, 1);
  });
});
