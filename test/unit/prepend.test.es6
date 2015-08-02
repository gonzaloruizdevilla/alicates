let assert = require('assert');

import {prepend} from '../../src/index.es6';


describe('prepend', function() {
  it('adds the element to the beginning of the list', function() {
    assert.deepEqual(prepend('x', ['y', 'z']), ['x', 'y', 'z']);
    assert.deepEqual(prepend(['a', 'z'], ['x', 'y']), [['a', 'z'], 'x', 'y']);
  });

  it('works on empty list', function() {
    assert.deepEqual(prepend(1, []), [1]);
  });

  it('is curried', function() {
    assert.strictEqual(typeof prepend(4), 'function');
    assert.deepEqual(prepend(4)([3, 2, 1]), [4, 3, 2, 1]);
  });
});
