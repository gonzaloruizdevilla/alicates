let assert = require('chai').assert;

import {dropRepeatsWith, eqProps, into} from '../../src/index.es6';

describe('dropRepeatsWith', () => {
  let objs = [
    {i: 1}, {i: 2}, {i: 3}, {i: 4}, {i: 5}, {i: 3}
  ];
  let objs2 = [
    {i: 1}, {i: 1}, {i: 1}, {i: 2}, {i: 3},
    {i: 3}, {i: 4}, {i: 4}, {i: 5}, {i: 3}
  ];
  let eqI = eqProps('i');

  it('removes repeated elements based on predicate', () => {
    assert.deepEqual(dropRepeatsWith(eqI, objs2), objs);
    assert.deepEqual(dropRepeatsWith(eqI, objs), objs);
  });

  it('keeps elements from the left', () => {
    assert.deepEqual(
      dropRepeatsWith(eqI, [{i: 1, n: 1}, {i: 1, n: 2}, {i: 1, n: 3}, {i: 4, n: 1}, {i: 4, n: 2}]),
      [{i: 1, n: 1}, {i: 4, n: 1}]
    );
  });

  it('returns an empty array for an empty array', () => {
    assert.deepEqual(dropRepeatsWith(eqI, []), []);
  });

  it('is curried', () => {
    assert.strictEqual(typeof dropRepeatsWith(eqI), 'function');
    assert.deepEqual(dropRepeatsWith(eqI)(objs), objs);
    assert.deepEqual(dropRepeatsWith(eqI)(objs2), objs);
  });

  it('can act as a transducer', () => {
    assert.deepEqual(into([], dropRepeatsWith(eqI), objs2), objs);
  });
});
