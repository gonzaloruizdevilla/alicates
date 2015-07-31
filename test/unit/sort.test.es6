let assert = require('chai').assert;

import {sort} from '../../src/index.es6';

describe('sort', function() {
  it('sorts the elements of a list', function() {
    assert.deepEqual(sort(function(a, b) {return a - b;}, [3, 1, 8, 1, 2, 5]), [1, 1, 2, 3, 5, 8]);
  });

  it('does not affect the list passed supplied', function() {
    var list = [3, 1, 8, 1, 2, 5];
    assert.deepEqual(sort(function(a, b) {return a - b;}, list), [1, 1, 2, 3, 5, 8]);
    assert.deepEqual(list, [3, 1, 8, 1, 2, 5]);
  });

  it('is curried', function() {
    var sortByLength = sort(function(a, b) {return a.length - b.length;});
    assert.deepEqual(sortByLength(['one', 'two', 'three', 'four', 'five', 'six']),
                     ['one', 'two', 'six', 'four', 'five', 'three']);
  });
});
