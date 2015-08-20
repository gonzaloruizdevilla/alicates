let assert = require('chai').assert;

import {zipObj} from '../../src/index.es6';

describe('zipObj', () => {
  it('combines an array of keys with an array of values into a single object', () => {
    assert.deepEqual(zipObj(['a', 'b', 'c'], [1, 2, 3]), {a: 1, b: 2, c: 3});
  });
  it('ignores extra values', () => {
    assert.deepEqual(zipObj(['a', 'b', 'c'], [1, 2, 3, 4, 5, 6, 7]), {a: 1, b: 2, c: 3});
  });
  it('extra keys are undefined', () => {
    assert.deepEqual(zipObj(['a', 'b', 'c', 'd', 'e', 'f'], [1, 2, 3]),
                     {a: 1, b: 2, c: 3, d: undefined, e: undefined, f: undefined});
  });
  it('last one in wins when there are duplicate keys', () => {
    assert.deepEqual(zipObj(['a', 'b', 'c', 'a'], [1, 2, 3, 'LAST']), {a: 'LAST', b: 2, c: 3});
  });
});
