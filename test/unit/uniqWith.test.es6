let assert = require('chai').assert;

import {uniqWith, t, f} from '../../src/index.es6';

describe('uniqWith', () => {
  var objs = [
    {x: t, i: 0}, {x: f, i: 1}, {x: t, i: 2}, {x: t, i: 3},
    {x: f, i: 4}, {x: f, i: 5}, {x: t, i: 6}, {x: f, i: 7}
  ];
  var objs2 = [
    {x: t, i: 0}, {x: f, i: 1}, {x: t, i: 2}, {x: t, i: 3},
    {x: f, i: 0}, {x: t, i: 1}, {x: f, i: 2}, {x: f, i: 3}
  ];
  function eqI(x, accX) { return x.i === accX.i; }

  it('returns a set from any array (i.e. purges duplicate elements) based on predicate', () => {
    assert.deepEqual(uniqWith(eqI, objs), objs);
    assert.deepEqual(uniqWith(eqI, objs2), [{x: t, i: 0}, {x: f, i: 1}, {x: t, i: 2}, {x: t, i: 3}]);
  });

  it('keeps elements from the left', () => {
    assert.deepEqual(uniqWith(eqI, [{i: 1}, {i: 2}, {i: 3}, {i: 4}, {i: 1}]), [{i: 1}, {i: 2}, {i: 3}, {i: 4}]);
  });

  it('returns an empty array for an empty array', () => {
    assert.deepEqual(uniqWith(eqI, []), []);
  });

  it('is curried', () => {
    assert.strictEqual(typeof uniqWith(eqI), 'function');
    assert.deepEqual(uniqWith(eqI)(objs), objs);
    assert.deepEqual(uniqWith(eqI)(objs2), [{x: t, i: 0}, {x: f, i: 1}, {x: t, i: 2}, {x: t, i: 3}]);
  });
});
