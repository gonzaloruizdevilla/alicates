let assert = require('chai').assert;

import {gt, __} from '../../src/index.es6';

describe('gt', function() {
  it('reports whether one item is less than another', function() {
    assert.strictEqual(gt(3, 5), false);
    assert.strictEqual(gt(6, 4), true);
    assert.strictEqual(gt(7.0, 7.0), false);
    assert.strictEqual(gt('abc', 'xyz'), false);
    assert.strictEqual(gt('abcd', 'abc'), true);
  });

  it('is curried', function() {
    var lt20 = gt(20);
    assert.strictEqual(lt20(10), true);
    assert.strictEqual(lt20(20), false);
    assert.strictEqual(lt20(25), false);
  });

  it('behaves right curried when passed `__` for its first argument', function() {
    var gt20 = gt(__, 20);
    assert.strictEqual(gt20(10), false);
    assert.strictEqual(gt20(20), false);
    assert.strictEqual(gt20(25), true);
  });

});
