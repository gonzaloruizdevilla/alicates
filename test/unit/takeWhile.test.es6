let assert = require('chai').assert;

import {takeWhile, into} from '../../src/index.es6';

describe('takeWhile', () => {
  it('continues taking elements while the function reports `true`', () => {
    assert.deepEqual(takeWhile(x => x !== 5, [1, 3, 5, 7, 9]), [1, 3]);
  });

  it('starts at the right arg and acknowledges undefined', () => {
    assert.deepEqual(takeWhile(() => assert(false), []), []);
    assert.deepEqual(takeWhile(x => x !== void 0, [1, 3, void 0, 5, 7]), [1, 3]);
  });

  it('is curried', () => {
    var takeUntil7 = takeWhile(x => x !== 7);
    assert.deepEqual(takeUntil7([1, 3, 5, 7, 9]), [1, 3, 5]);
    assert.deepEqual(takeUntil7([2, 4, 6, 8, 10]), [2, 4, 6, 8, 10]);
  });

  it('can act as a transducer', function() {
    const intoArray = into([]);
    const dropLt7 = takeWhile(x => x < 7);
    assert.deepEqual(intoArray(dropLt7, [1, 3, 5, 7, 9]), [1, 3, 5]);
  });

});
