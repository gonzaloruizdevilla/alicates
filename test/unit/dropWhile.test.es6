let assert = require('chai').assert;

import {dropWhile, into} from '../../src/index.es6';

describe('dropWhile', () => {
  it('skips elements while the function reports `true`', () => {
    assert.deepEqual(dropWhile(function(x) {return x < 5;}, [1, 3, 5, 7, 9]), [5, 7, 9]);
  });

  it('returns an empty list for an ampty list', () => {
    assert.deepEqual(dropWhile(() => false, []), []);
    assert.deepEqual(dropWhile(() => true, []), []);
  });

  it('starts at the right arg and acknowledges undefined', () => {
    const sublist = dropWhile(x => x !== void 0, [1, 3, void 0, 5, 7]);
    assert.strictEqual(sublist.length, 3);
    assert.strictEqual(sublist[0], void 0);
    assert.strictEqual(sublist[1], 5);
    assert.strictEqual(sublist[2], 7);
  });

  it('can act as a transducer', function() {
    const intoArray = into([]);
    const dropLt7 = dropWhile(x => x < 7);
    assert.deepEqual(intoArray(dropLt7, [1, 3, 5, 7, 9]), [7, 9]);
  });

  it('is curried', () => {
    const dropLt7 = dropWhile(x => x < 7);
    assert.deepEqual(dropLt7([1, 3, 5, 7, 9]), [7, 9]);
    assert.deepEqual(dropLt7([2, 4, 6, 8, 10]), [8, 10]);
  });
});
