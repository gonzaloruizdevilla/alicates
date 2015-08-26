let assert = require('chai').assert;

import {into, take} from '../../src/index.es6';

describe('take', () => {

  it('takes only the first `n` elements from a list', () => {
    assert.deepEqual(take(3, ['a', 'b', 'c', 'd', 'e', 'f', 'g']), ['a', 'b', 'c']);
  });

  it('returns only as many as the array can provide', () => {
    assert.deepEqual(take(3, [1, 2]), [1, 2]);
    assert.deepEqual(take(3, []), []);
  });

  it('returns an equivalent list if `n` is < 0', () => {
    assert.deepEqual(take(-1, [1, 2, 3]), [1, 2, 3]);
    assert.deepEqual(take(-Infinity, [1, 2, 3]), [1, 2, 3]);
  });

  it('never returns the input array', () => {
    var xs = [1, 2, 3];

    assert.notStrictEqual(take(3, xs), xs);
    assert.notStrictEqual(take(Infinity, xs), xs);
    assert.notStrictEqual(take(-1, xs), xs);
  });

  it('can operate on strings', () => {
    assert.strictEqual(take(3, 'Ramda'), 'Ram');
    assert.strictEqual(take(2, 'Ramda'), 'Ra');
    assert.strictEqual(take(1, 'Ramda'), 'R');
    assert.strictEqual(take(0, 'Ramda'), '');
  });

  it('handles zero correctly (#1224)', () => {
    assert.deepEqual(into([], take(0), [1, 2, 3]), []);
  });

});
