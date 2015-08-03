let assert = require('chai').assert;

import {defaultTo} from '../../src/index.es6';


describe('defaultTo', function() {

  var defaultTo42 = defaultTo(42);

  it('returns the default value if input is null/undefined', () => {
    assert.strictEqual(42, defaultTo42(null));
    assert.strictEqual(42, defaultTo42(undefined));
  });

  it('returns the input value if it is not null/undefined', () => {
    assert.strictEqual('a real value', defaultTo42('a real value'));
  });

  it('returns the input value even if it is considered falsy', () => {
    assert.strictEqual('', defaultTo42(''));
    assert.strictEqual(0, defaultTo42(0));
    assert.strictEqual(false, defaultTo42(false));
    assert.deepEqual([], defaultTo42([]));
  });

  it('can be called with both arguments directly', () => {
    assert.strictEqual(42, defaultTo(42, null));
    assert.strictEqual('a real value', defaultTo(42, 'a real value'));
  });

});
