let assert = require('chai').assert;

import {isDate} from '../../src/index.es6';

describe('isDate', () => {
  it('should return true for Date object', () => {
    assert.ok(isDate(new Date()))
  });

  it('should return false for non Date objects', () => {
    assert.notOk(isDate([]))
    assert.notOk(isDate(''))
    assert.notOk(isDate(23))
    assert.notOk(isDate({}))
  });
});
