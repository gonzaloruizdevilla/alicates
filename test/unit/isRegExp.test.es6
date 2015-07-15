let assert = require('chai').assert;

import {isRegExp} from '../../src/index.es6';

describe('isRegExp', () => {

    it('should return true for RegExp object', () => {
      assert.ok(isRegExp(/^foobar$/));
      assert.ok(isRegExp(new RegExp('^foobar$/')));
    });

    it('should return false for non RegExp objects', () => {
      assert.notOk(isRegExp([]));
      assert.notOk(isRegExp(''));
      assert.notOk(isRegExp(23));
      assert.notOk(isRegExp({}));
      assert.notOk(isRegExp(new Date()));
    });
  });
