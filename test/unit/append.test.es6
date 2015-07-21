let assert = require('chai').assert;

import {append} from '../../src/index.es6';

describe('append', function() {
  it('adds the element to the end of the list', function() {
    assert.deepEqual(append('z', ['x', 'y']), ['x', 'y', 'z']);
    assert.deepEqual(append(['a', 'z'], ['x', 'y']), ['x', 'y', ['a', 'z']]);
  });

  it('works on empty list', function() {
    assert.deepEqual(append(1, []), [1]);
  });

  it('is curried', function() {
    assert.strictEqual(typeof append(4), 'function');
    assert.deepEqual(append(1)([4, 3, 2]), [4, 3, 2, 1]);
  });
});
