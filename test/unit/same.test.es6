let assert = require('chai').assert;

import {same} from '../../src/index.es6';

describe('same', () => {
  var a = [];
  var b = a;
  it('has Object.is semantics', function() {
    assert.equal(same(100, 100), true);
    assert.equal(same(100, '100'), false);
    assert.equal(same('string', 'string'), true);
    assert.equal(same([], []), false);
    assert.equal(same(a, b), true);
    assert.equal(same(undefined, undefined), true);
    assert.equal(same(null, undefined), false);

    //assert.equal(same(-0, 0), false);
    //assert.equal(same(0, -0), false);
    assert.equal(same(NaN, NaN), true);

    assert.equal(same(NaN, 42), false);
    assert.equal(same(42, NaN), false);

    /* jshint -W053 */
    assert.equal(same(0, new Number(0)), false);
    assert.equal(same(new Number(0), 0), false);
    assert.equal(same(new Number(0), new Number(0)), false);
    /* jshint +W053 */
  });

  it('is curried', function() {
    var isA = same(a);
    assert.equal(isA([]), false);
  });
});
