let assert = require('chai').assert;

import {fromPairs} from '../../src/index.es6';

describe('fromPairs', function() {
  it('combines an array of two-element arrays into an object', function() {
    assert.deepEqual(fromPairs([['a', 1], ['b', 2], ['c', 3]]), {a: 1, b: 2, c: 3});
  });
  it('skips empty Arrays and non-Array elements', function() {
    assert.deepEqual(fromPairs([['a', 1], 'x', [], ['b', 2], {}, ['c', 3]]), {a: 1, b: 2, c: 3});
  });
});
