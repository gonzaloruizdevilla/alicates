let assert = require('chai').assert;

import {commute, of} from '../../src/index.es6';

describe('commute', () => {
  let as = [[1], [3, 4]];
  let bs = [[1, 2], [3]];
  let cs = [[1, 2], [3, 4]];


  it('"pivots" a list (list of functors => functor of a list)', () => {
    assert.deepEqual(commute(of, as), [[1, 3], [1, 4]]);
    assert.deepEqual(commute(of, bs), [[1, 3], [2, 3]]);
    assert.deepEqual(commute(of, cs), [[1, 3], [2, 3], [1, 4], [2, 4]]);
  });

  it('works on Algebraic Data Types such as "Maybe"', () => {
  //  assert.deepEqual(commute(Maybe.of, [Maybe(3), Maybe(4), Maybe(5)]), Maybe([3, 4, 5]));
  });

  it('is curried', () => {
    var cmtArr = commute(of);
    assert.strictEqual(typeof cmtArr, 'function');
    assert.deepEqual(cmtArr(as), [[1, 3], [1, 4]]);
    assert.deepEqual(cmtArr(bs), [[1, 3], [2, 3]]);
    assert.deepEqual(cmtArr(cs), [[1, 3], [2, 3], [1, 4], [2, 4]]);

  });
});
