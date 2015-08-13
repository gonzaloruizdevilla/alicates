let assert = require('chai').assert;

import {identical} from '../../src/index.es6';

describe('identical',() => {
  let a = [];
  let b = a;
  it('has Object.is semantics',() => {
    assert.strictEqual(identical(100, 100), true);
    assert.strictEqual(identical(100, '100'), false);
    assert.strictEqual(identical('string', 'string'), true);
    assert.strictEqual(identical([], []), false);
    assert.strictEqual(identical(a, b), true);
    assert.strictEqual(identical(undefined, undefined), true);
    assert.strictEqual(identical(null, undefined), false);

    assert.strictEqual(identical(-0, 0), false);
    assert.strictEqual(identical(0, -0), false);
    assert.strictEqual(identical(NaN, NaN), true);

    assert.strictEqual(identical(NaN, 42), false);
    assert.strictEqual(identical(42, NaN), false);

    /* jshint -W053 */
    assert.strictEqual(identical(0, new Number(0)), false);
    assert.strictEqual(identical(new Number(0), 0), false);
    assert.strictEqual(identical(new Number(0), new Number(0)), false);
    /* jshint +W053 */
  });

  it('is curried',() => {
    let isA = identical(a);
    assert.strictEqual(isA([]), false);
  });
});
