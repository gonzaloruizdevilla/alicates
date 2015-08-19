let assert = require('chai').assert;

import {isObject} from '../../src/index.es6';

describe('isObject', () => {
  it('should return true for objects', () => {
    assert.ok(isObject({}));
    assert.ok(isObject([]));
    assert.ok(isObject(new Date()));
    assert.ok(isObject(/x/));
  });

  it('should return false for non objects', () => {
    assert.notOk(isObject(''));
    assert.notOk(isObject(23));
    assert.notOk(isObject(false));
    assert.notOk(isObject(()=>true));
  });
});
