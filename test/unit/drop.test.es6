let assert = require('chai').assert;

import {drop, into} from '../../src/index.es6';

describe('drop', function() {

  it('skips the first `n` elements from a list, returning the remainder', function() {
    assert.deepEqual(drop(3, ['a', 'b', 'c', 'd', 'e', 'f', 'g']), ['d', 'e', 'f', 'g']);
  });

  it('returns an empty array if `n` is too large', function() {
    assert.deepEqual(drop(20, ['a', 'b', 'c', 'd', 'e', 'f', 'g']), []);
  });

  it('returns an equivalent list if `n` is <= 0', function() {
    assert.deepEqual(drop(0, [1, 2, 3]), [1, 2, 3]);
    assert.deepEqual(drop(-1, [1, 2, 3]), [1, 2, 3]);
    assert.deepEqual(drop(-Infinity, [1, 2, 3]), [1, 2, 3]);
  });

  it('never returns the input array', function() {
    let xs = [1, 2, 3];

    assert.notStrictEqual(drop(0, xs), xs);
    assert.notStrictEqual(drop(-1, xs), xs);
  });

  it('skips the first `n` elementsand send into transducers', function() {
    const intoArray = into([]);
    assert.deepEqual(intoArray(drop(3), [1, 3, 5, 7, 9]), [7, 9]);
  });

  it('can operate on strings', function() {
    assert.strictEqual(drop(6, 'Alicates'), 'es');
    assert.strictEqual(drop(7, 'Alicates'), 's');
    assert.strictEqual(drop(8, 'Alicates'), '');
    assert.strictEqual(drop(9, 'Alicates'), '');
  });

});
