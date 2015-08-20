let assert = require('chai').assert;

import {differenceWith} from '../../src/index.es6';

describe('differenceWith', () => {
  let Ro = [{a: 1}, {a: 2}, {a: 3}, {a: 4}];
  let Ro2 = [{a: 1}, {a: 2}, {a: 3}, {a: 4}, {a: 1}, {a: 2}, {a: 3}, {a: 4}];
  let So = [{a: 3}, {a: 4}, {a: 5}, {a: 6}];
  let So2 = [{a: 3}, {a: 4}, {a: 5}, {a: 6}, {a: 3}, {a: 4}, {a: 5}, {a: 6}];
  let eqA = (r, s) => r.a === s.a;
  let eq = (a, b) => a === b;

  it('combines two lists into the set of all their elements based on the passed-in equality predicate', () => {
    assert.deepEqual(differenceWith(eqA, Ro, So), [{a: 1}, {a: 2}]);
  });

  it('does not allow duplicates in the output even if the input lists had duplicates', () => {
    assert.deepEqual(differenceWith(eqA, Ro2, So2), [{a: 1}, {a: 2}]);
  });

  it('does not return a "sparse" array', () => {
    assert.strictEqual(differenceWith(eq, [1, 3, 2, 1, 3, 1, 2, 3], [3]).length, 2);
  });

});
