let assert = require('chai').assert;

import {invoker} from '../../src/index.es6';

describe('invoker', () => {

  var concat2 = invoker(2, 'concat');

  it('returns a function with correct arity', () => {
    assert.strictEqual(concat2.length, 3);
  });

  it('calls the method on the object', () => {
    assert.deepEqual(concat2(3, 4, [1, 2]), [1, 2, 3, 4]);
  });

  it('throws a descriptive TypeError if method does not exist', () => {
    assert.throws(
      function() { invoker(0, 'foo')(null); },
      TypeError,
      'null does not have a method named "foo"'
    );
    assert.throws(
      function() { invoker(0, 'foo')([1, 2, 3]); },
      TypeError,
      '[1, 2, 3] does not have a method named "foo"'
    );
    assert.throws(
      function() { invoker(0, 'length')([1, 2, 3]); },
      TypeError,
      '[1, 2, 3] does not have a method named "length"'
    );
  });

  it('curries the method call', function() {
    assert.deepEqual(concat2(3)(4)([1, 2]), [1, 2, 3, 4]);
    assert.deepEqual(concat2(3, 4)([1, 2]), [1, 2, 3, 4]);
    assert.deepEqual(concat2(3)(4, [1, 2]), [1, 2, 3, 4]);
  });

});
