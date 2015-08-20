'use strict';
let assert = require('chai').assert;

import {dropLast, into} from '../../src/index.es6';

describe('dropLast', () => {
  it('skips the last `n` elements from a list, returning the remainder', () => {
    assert.deepEqual(dropLast(3, ['a', 'b', 'c', 'd', 'e', 'f', 'g']), ['a', 'b', 'c', 'd']);
  });

  it('returns an empty array if `n` is too large', () => {
    assert.deepEqual(dropLast(20, ['a', 'b', 'c', 'd', 'e', 'f', 'g']), []);
  });

  it('returns an equivalent list if `n` is <= 0', () => {
    assert.deepEqual(dropLast(0, [1, 2, 3]), [1, 2, 3]);
    assert.deepEqual(dropLast(-1, [1, 2, 3]), [1, 2, 3]);
    assert.deepEqual(dropLast(-Infinity, [1, 2, 3]), [1, 2, 3]);
  });

  it('never returns the input array', () => {
    var xs = [1, 2, 3];

    assert.notStrictEqual(dropLast(0, xs), xs);
    assert.notStrictEqual(dropLast(-1, xs), xs);
  });

  it('can operate on strings', () => {
    assert.strictEqual(dropLast(3, 'Ramda'), 'Ra');
  });

  it('is curried', () => {
    var dropLast2 = dropLast(2);
    assert.deepEqual(dropLast2(['a', 'b', 'c', 'd', 'e']), ['a', 'b', 'c']);
    assert.deepEqual(dropLast2(['x', 'y', 'z']), ['x']);
  });

  it('can act as a transducer', () => {
    var dropLast2 = dropLast(2);
    assert.deepEqual(into([], dropLast2, [1, 3, 5, 7, 9, 1, 2]), [1, 3, 5, 7, 9]);
  });
});
