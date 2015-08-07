let assert = require('chai').assert;

import {lt} from '../../src/index.es6';

describe('lt', function() {
  it('reports whether one item is less than another', function() {
    assert.strictEqual(lt(3, 5), true);
    assert.strictEqual(lt(6, 4), false);
    assert.strictEqual(lt(7.0, 7.0), false);
    assert.strictEqual(lt('abc', 'xyz'), true);
    assert.strictEqual(lt('abcd', 'abc'), false);
  });

  it('is curried', function() {
    var gt5 = lt(5);
    assert.strictEqual(gt5(10), true);
    assert.strictEqual(gt5(5), false);
    assert.strictEqual(gt5(3), false);
  });
/*
  it('behaves right curried when passed `__` for its first argument', function() {
    var lt5 = lt(__, 5);
    assert.strictEqual(lt5(10), false);
    assert.strictEqual(lt5(5), false);
    assert.strictEqual(lt5(3), true);
  });*/
});
