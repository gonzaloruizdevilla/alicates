let assert = require('chai').assert;

import {isFunction} from '../../src/index.es6';

describe('isFunction', () => {

    it('should return true for functions', () => {
      assert.ok(isFunction(function (){}));
      assert.ok(isFunction(() => true));
    });

    it('should return false for non functions', () => {
      assert.notOk(isFunction([]));
      assert.notOk(isFunction(''));
      assert.notOk(isFunction(23));
      assert.notOk(isFunction({}));
      assert.notOk(isFunction(new Date()));
      assert.notOk(isFunction(/x/));
    });
  });
