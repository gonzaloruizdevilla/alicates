let assert = require('chai').assert;

import {sum} from '../../src/index.es6';

describe('sum', () => {

  it('adds together the array of numbers supplied', function() {
    assert.strictEqual(sum([1, 2, 3, 4]), 10);
  });

  it('does not save the state of the accumulator', function() {
    assert.strictEqual(sum([1, 2, 3, 4]), 10);
    assert.strictEqual(sum([1]), 1);
    assert.strictEqual(sum([5, 5, 5, 5, 5]), 25);
  });

});
