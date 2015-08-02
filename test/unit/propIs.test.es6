let assert = require('chai').assert;

import {propIs} from '../../src/index.es6';

describe('propIs', function() {

  it('returns true if the specified object property is of the given type', function() {
    assert.strictEqual(propIs(Number, 'value', {value: 1}), true);
  });

  it('returns false otherwise', function() {
    assert.strictEqual(propIs(String, 'value', {value: 1}), false);
    assert.strictEqual(propIs(String, 'value', {}), false);
  });

});
