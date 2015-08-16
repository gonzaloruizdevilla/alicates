let assert = require('chai').assert;

import {inc} from '../../src/index.es6';


describe('inc', () => {

  it('increments its argument', () => {
    assert.strictEqual(inc(-1), 0);
    assert.strictEqual(inc(0), 1);
    assert.strictEqual(inc(1), 2);
    assert.strictEqual(inc(12.34), 13.34);
    assert.strictEqual(inc(-Infinity), -Infinity);
    assert.strictEqual(inc(Infinity), Infinity);
  });

});
