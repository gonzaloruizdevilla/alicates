let assert = require('chai').assert;

import {containsWith} from '../../src/index.es6';

describe('containsWith', () => {
  let Ro = [{a: 1}, {a: 2}, {a: 3}, {a: 4}];
  let So = [{a: 3}, {a: 4}, {a: 5}, {a: 6}];
  let eqA = (r, s) => r.a === s.a;

  it('determines if an element is the list based on the predicate', () => {
    assert.strictEqual(containsWith(eqA, {a: 3}, So), true);
    assert.strictEqual(containsWith(eqA, {a: 3000}, So), false);
  });
  it('is curried', () => {
    assert.strictEqual(typeof containsWith(eqA), 'function');
    assert.strictEqual(typeof containsWith(eqA)({a: 3}), 'function');
    assert.strictEqual(containsWith(eqA)({a: 3})(Ro), true);
  });
});
