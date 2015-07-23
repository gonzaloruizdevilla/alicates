let assert = require('chai').assert;

import {always, equals, indexOf} from '../../src/index.es6';

describe('indexOf', () => {

  it('returns a number indicating an object\'s position in a list', () => {
    let list = [0, 10, 20, 30];
    assert.strictEqual(indexOf(30, list), 3);
  });

  it('returns -1 if the object is not in the list', () => {
    let list = [0, 10, 20, 30];
    assert.strictEqual(indexOf(40, list), -1);
  });

  let input = [1, 2, 3, 4, 5];

  it('returns the index of the first item', () => {
    assert.strictEqual(indexOf(1, input), 0);
  });

  it('returns the index of the last item', () => {
    assert.strictEqual(indexOf(5, input), 4);
  });

  let list = [1, 2, 3];

  list[-2] = 4; // Throw a wrench in the gears by assigning a non-valid array index as object property.

  it('finds 1', () => {
    assert.strictEqual(indexOf(1, list), 0);
  });

  it('finds 1 and is result strictly it', () => {
    assert.strictEqual(indexOf(1, list), 0);
  });

  it('does not find 4', () => {
    assert.strictEqual(indexOf(4, list), -1);
  });

  it('does not consider \'1\' equal to 1', () => {
    assert.strictEqual(indexOf('1', list), -1);
  });

  it('returns -1 for an empty array', () => {
    assert.strictEqual(indexOf('x', []), -1);
  });

  it('has equals semantics', () => {
    function Just(x) { this.value = x; }
    Just.prototype.equals = function(x) {
      return x instanceof Just && equals(x.value, this.value);
    };

    assert.strictEqual(indexOf(0, [-0]), -1);
    assert.strictEqual(indexOf(-0, [0]), -1);
    assert.strictEqual(indexOf(NaN, [NaN]), 0);
    assert.strictEqual(indexOf(new Just([42]), [new Just([42])]), 0);
  });

  it('dispatches to `indexOf` method', () => {
    function Empty() {}
    Empty.prototype.indexOf = always(-1);

    function List(head, tail) {
      this.head = head;
      this.tail = tail;
    }
    List.prototype.indexOf = function(x) {
      let idx = this.tail.indexOf(x);
      return this.head === x ? 0 : idx >= 0 ? 1 + idx : -1;
    };

    let list = new List('b',
               new List('a',
               new List('n',
               new List('a',
               new List('n',
               new List('a',
               new Empty()))))));

    assert.strictEqual(indexOf('a', 'banana'), 1);
    assert.strictEqual(indexOf('x', 'banana'), -1);
    assert.strictEqual(indexOf('a', list), 1);
    assert.strictEqual(indexOf('x', list), -1);
  });

  it('is curried', () => {
    let curried = indexOf(3);
    assert.strictEqual(curried(list), 2);
  });
});
