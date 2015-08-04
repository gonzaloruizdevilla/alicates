let assert = require('chai').assert;

import {createMapEntry} from '../../src/index.es6';

describe('createMapEntry', function() {
  it('creates an object containing a single key:value pair', function() {
    assert.deepEqual(createMapEntry('foo', 42), {foo: 42});
  });

  it('is curried', function() {
    assert.deepEqual(createMapEntry('foo')(42), {foo: 42});
  });
});
