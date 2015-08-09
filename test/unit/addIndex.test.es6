let assert = require('chai').assert;

import {all, addIndex, gt, map, reduce} from '../../src/index.es6';


describe('addIndex', () => {
  describe('works with unary functions like `map`', () => {
    var times2 = function(x) {return x * 2;};
    var addIndexParam = function(x, idx) {return x + idx;};
    var squareEnds = function(x, idx, list) {
      return (idx === 0 || idx === list.length - 1) ? x * x : x;
    };
    var mapIndexed = addIndex(map);

    it('working just like a normal map', () => {
      assert.deepEqual(mapIndexed(times2, [1, 2, 3, 4]), [2, 4, 6, 8]);
    });

    it('passing the index as a second parameter to the callback', () => {
      assert.deepEqual(mapIndexed(addIndexParam, [8, 6, 7, 5, 3, 0, 9]), [8, 7, 9, 8, 7, 5, 15]); // [8 + 0, 6 + 1...]
    });

    it('passing the entire list as a third parameter to the callback', () => {
      assert.deepEqual(mapIndexed(squareEnds, [8, 6, 7, 5, 3, 0, 9]), [64, 6, 7, 5, 3, 0, 81]);
    });

    it('acting as a curried function', () => {
      var makeSquareEnds = mapIndexed(squareEnds);
      assert.deepEqual(makeSquareEnds([8, 6, 7, 5, 3, 0, 9]), [64, 6, 7, 5, 3, 0, 81]);
    });
  });

  describe('works with binary functions like `reduce`', () => {
    var reduceIndexed = addIndex(reduce);
    var timesIndexed = function(tot, num, idx) {console.log(arguments); return  tot + (num * idx);};
    var objectify = function(acc, elem, idx) { acc[elem] = idx; return acc;};

    it('passing the index as a third parameter to the predicate', () => {
      assert.strictEqual(reduceIndexed(timesIndexed, 0, [1, 2, 3, 4, 5]), 40);
      assert.deepEqual(reduceIndexed(objectify, {}, ['a', 'b', 'c', 'd', 'e']), {a: 0, b: 1, c: 2, d: 3, e: 4});
    });

    it('passing the entire list as a fourth parameter to the predicate', () => {
      var list = [1, 2, 3];
      reduceIndexed(function(acc, x, idx, ls) {
        assert.strictEqual(ls, list);
        return acc;
      }, 0, list);
    });
  });

  describe('works with functions like `all` that do not typically have index applied', () => {
    var allIndexed = addIndex(all);
    var superDiagonal = allIndexed(gt);
    it('passing the index as a second parameter', () => {
      assert.strictEqual(superDiagonal([8, 6, 5, 4, 9]), true); // 8 > 0, 6 > 1, 5 > 2, 4 > 3, 9 > 5
      assert.strictEqual(superDiagonal([8, 6, 1, 3, 9]), false); //  1 !> 2, 3 !> 3
    });
  });

/*
  describe('works with arbitrary user-defined functions', () => {
    var mapFilter = function(m, f, list) {
      return filter(compose(f, m), list);
    };
    var mapFilterIndexed = addIndex(mapFilter);
    it('passing the index as an additional parameter', () => {
      assert.deepEqual(mapFilterIndexed(
        multiply,
        gt(__, 13),
        [8, 6, 7, 5, 3, 0, 9]
      ), [7, 5, 9]); // 2 * 7 > 13, 3 * 5 > 13, 6 * 9 > 13
    });
  });
*/
});
