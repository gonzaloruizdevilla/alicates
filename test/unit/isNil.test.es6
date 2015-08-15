let assert = require('chai').assert;

import {isNil} from '../../src/index.es6';

describe('isNil', () => {

  it('tests a value for `null` or `undefined`', () => {
    assert.strictEqual(isNil(void 0), true);
    assert.strictEqual(isNil(null), true);
    assert.strictEqual(isNil([]), false);
    assert.strictEqual(isNil({}), false);
    assert.strictEqual(isNil(0), false);
    assert.strictEqual(isNil(''), false);
  });

});
