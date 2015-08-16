let assert = require('chai').assert;

import {intersectionWith} from '../../src/index.es6';

describe('intersectionWith', () => {
  var Ro = [{a: 1}, {a: 2}, {a: 3}, {a: 4}];
  var So = [{a: 3}, {a: 4}, {a: 5}, {a: 6}];
  var eqA = (r, s) => r.a === s.a;

  it('combines two lists into the set of all their elements based on the passed-in equality predicate', () => {
    assert.deepEqual(intersectionWith(eqA, Ro, So), [{a: 3}, {a: 4}]);
  });

  it('is curried', () => {
    assert.deepEqual(intersectionWith(eqA)(Ro, So), [{a: 3}, {a: 4}]);
  })
});
