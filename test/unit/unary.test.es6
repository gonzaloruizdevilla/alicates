let assert = require('chai').assert;

import {unary} from '../../src/index.es6';

describe('unary', () => {
  it('turns multiple-argument function into unary one', () => {
    unary(function(x, y, z) {
      assert.strictEqual(arguments.length, 1);
      assert.strictEqual(typeof y, 'undefined');
      assert.strictEqual(typeof z, 'undefined');
    })(10, 20, 30);
  });

  it('initial argument is passed through normally', () => {
    unary(function(x, y, z) {
      assert.strictEqual(x, 10);
      void z;
    })(10, 20, 30);
  });
});
