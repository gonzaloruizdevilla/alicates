let assert = require('chai').assert;

import {takeLast, into} from '../../src/index.es6';


describe('takeLast', () => {

  it('takes only the last `n` elements from a list', () => {
    assert.deepEqual(takeLast(3, ['a', 'b', 'c', 'd', 'e', 'f', 'g']), ['e', 'f', 'g']);
  });

  it('returns only as many as the array can provide', () => {
    assert.deepEqual(takeLast(3, [1, 2]), [1, 2]);
    assert.deepEqual(takeLast(3, []), []);
  });

  it('returns an equivalent list if `n` is < 0', () => {
    assert.deepEqual(takeLast(-1, [1, 2, 3]), [1, 2, 3]);
    assert.deepEqual(takeLast(-Infinity, [1, 2, 3]), [1, 2, 3]);
  });

  it('never returns the input array', () => {
    var xs = [1, 2, 3];

    assert.notStrictEqual(takeLast(3, xs), xs);
    assert.notStrictEqual(takeLast(Infinity, xs), xs);
    assert.notStrictEqual(takeLast(-1, xs), xs);
  });

  it('can operate on strings', () => {
    assert.strictEqual(takeLast(3, 'Ramda'), 'mda');
  });

  it('handles zero correctly (#1224)', () => {
    assert.deepEqual(takeLast(0, [1, 2, 3]), []);
  });

  it('is curried', () => {
    var takeLast3 = takeLast(3);
    assert.deepEqual(takeLast3(['a', 'b', 'c', 'd', 'e', 'f', 'g']), ['e', 'f', 'g']);
    assert.deepEqual(takeLast3(['w', 'x', 'y', 'z']), ['x', 'y', 'z']);
  });

  it('can act as a transducer', function() {
    const takeLast2 = takeLast(2);
    const takeLast10 = takeLast(10);
    assert.deepEqual(into([])(takeLast2, [1, 3, 5, 7, 9]), [7, 9]);
    assert.deepEqual(into([])(takeLast10, [1, 3, 5, 7, 9]), [1, 3, 5, 7, 9]);
  });

});
