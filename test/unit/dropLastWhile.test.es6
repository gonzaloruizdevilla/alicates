'use strict';
let assert = require('chai').assert;

import {dropLastWhile, into} from '../../src/index.es6';

describe('dropLastWhile', () => {
  it('skips elements while the function reports `true`', () => {
    assert.deepEqual(dropLastWhile(x => x >= 5, [1, 3, 5, 7, 9]), [1, 3]);
  });

  it('returns an empty list for an empty list', () => {
    assert.deepEqual(dropLastWhile(() => false, []), []);
    assert.deepEqual(dropLastWhile(() => true, []), []);
  });

  it('starts at the right arg and acknowledges undefined', () => {
    let sublist = dropLastWhile(x => x !== void 0, [1, 3, void 0, 5, 7]);
    assert.strictEqual(sublist.length, 3);
    assert.strictEqual(sublist[0], 1);
    assert.strictEqual(sublist[1], 3);
    assert.strictEqual(sublist[2], void 0);
  });

  it('is curried', () => {
    let dropGt7 = dropLastWhile(function(x) {return x > 7;});
    assert.deepEqual(dropGt7([1, 3, 5, 7, 9]), [1, 3, 5, 7]);
    assert.deepEqual(dropGt7([1, 3, 5]), [1, 3, 5]);
  });

  it('can act as a transducer', function() {
    const dropLt7 = dropLastWhile(x => x < 7);
    assert.deepEqual(into([],dropLt7, [1, 3, 5, 7, 9, 1, 2]), [1, 3, 5, 7, 9]);
  });
});
