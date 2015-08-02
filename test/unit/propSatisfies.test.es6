let assert = require('chai').assert;

import {propSatisfies} from '../../src/index.es6';

describe('propSatisfies', function() {

  var isPositive = function(n) { return n > 0; };

  it('returns true if the specified object property satisfies the given predicate', function() {
    assert.strictEqual(propSatisfies(isPositive, 'x', {x: 1, y: 0}), true);
  });

  it('returns false otherwise', function() {
    assert.strictEqual(propSatisfies(isPositive, 'y', {x: 1, y: 0}), false);
  });

});
