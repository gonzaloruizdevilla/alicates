let assert = require('chai').assert;

import {intersperse} from '../../src/index.es6';

describe('intersperse', function() {
  it('interposes a separator between list items', function() {
    assert.deepEqual(intersperse('n', ['ba', 'a', 'a']), ['ba', 'n', 'a', 'n', 'a']);
    assert.deepEqual(intersperse('bar', ['foo']), ['foo']);
    assert.deepEqual(intersperse('bar', []), []);
  });

  it('dispatches', function() {
    var obj = {intersperse: function(x) { return 'override ' + x; }};
    assert.strictEqual(intersperse('x', obj), 'override x');
  });

  it('is curried', function() {
    assert.deepEqual(intersperse('n')(['ba', 'a', 'a']), ['ba', 'n', 'a', 'n', 'a']);
  });
});
