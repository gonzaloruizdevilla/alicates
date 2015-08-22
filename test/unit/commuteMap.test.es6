let assert = require('chai').assert;

import {commuteMap, map, of} from '../../src/index.es6';

describe('commuteMap', () => {
  let as = [[1], [3, 4]];
  let bs = [[1, 2], [3]];
  let cs = [[1, 2], [3, 4]];

  let plus10map = map(x => x + 10);
  it('"pivots" a list (list of functors => functor of a list) and applies a transformation', () => {
    assert.deepEqual(commuteMap(plus10map, of, as), [[11, 13], [11, 14]]);
    assert.deepEqual(commuteMap(plus10map, of, bs), [[11, 13], [12, 13]]);
    assert.deepEqual(commuteMap(plus10map, of, cs), [[11, 13], [12, 13], [11, 14], [12, 14]]);
  });

  it('works on Algebraic Data Types such as "Maybe"', () => {
  //  assert.deepEqual(commuteMap(plus10map, Maybe, [Maybe(3), Maybe(4), Maybe(5)]), Maybe([13, 14, 15]));
  });

  it('is curried', () => {
    let cmtPlus10 = commuteMap(plus10map);
    assert.strictEqual(typeof cmtPlus10, 'function');

    let cmtmArr = cmtPlus10(of);
    assert.strictEqual(typeof cmtmArr, 'function');
    assert.deepEqual(cmtmArr(as), [[11, 13], [11, 14]]);
    assert.deepEqual(cmtmArr(bs), [[11, 13], [12, 13]]);
    assert.deepEqual(cmtmArr(cs), [[11, 13], [12, 13], [11, 14], [12, 14]]);
  });
});
