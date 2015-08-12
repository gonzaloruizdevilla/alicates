let assert = require('chai').assert;

import {negate} from '../../src/index.es6';

describe('negate', function() {

  it('negates its argument', function() {
    assert.strictEqual(negate(-Infinity), Infinity);
    assert.strictEqual(negate(-1), 1);
    assert.strictEqual(negate(0), 0);
    assert.strictEqual(negate(1), -1);
    assert.strictEqual(negate(Infinity), -Infinity);
  });

});
