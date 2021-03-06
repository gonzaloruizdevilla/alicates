let assert = require('chai').assert;

import {cons} from '../../src/modules/functor/List';
import {into} from '../../src/modules/list/into';
import {Nil} from '../../src/modules/functor/List';
import {none} from '../../src/modules/list/none';


describe('none', () => {
  const pred = a => a > 2;

  it('should return true if none of the values match the predicate', () => {
    assert.notOk(none(pred, [1,1,3]));
    assert.ok(none(pred, [1,1,1]));
  });

  it('should return true on an empty list', () => {
    assert.ok(none(pred, []));
  });

  it('should be curried', () => {
    assert.ok(none(pred)([1,1,1]));
  });

  it('can act as a transformer', () => {
    assert.deepEqual(into([], none(pred), [1,1,1]), [true]);
    assert.deepEqual(into([], none(pred), [3,6,2]), [false]);
    assert.deepEqual(into(Nil, none(pred), [1,1,1]), cons(true, Nil));
    assert.deepEqual(into(Nil, none(pred), [1,6,7]), cons(false, Nil));
  });
});
