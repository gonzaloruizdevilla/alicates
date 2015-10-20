let assert = require('chai').assert;

import {useWith} from '../../src/index.es6';

describe('useWith', () => {
  let max = Math.max;
  let add1 = x => x + 1;
  let mult2 = x => x * 2;
  let div3 = x =>  x / 3;
  let f = useWith(max, [add1, mult2, div3]);

  it('takes a list of function and returns a function', () => {
     assert.strictEqual(typeof useWith(max, []), 'function');
     assert.strictEqual(typeof useWith(max, [add1]), 'function');
     assert.strictEqual(typeof useWith(max, [add1, mult2, div3]), 'function');
   });

  it('passes the arguments received to their respective functions', () => {
    assert.strictEqual(f(7, 8, 9), 16); // max(7 + 1, 8 * 2, 9 / 3);
  });

  it('passes additional arguments to the main function', () => {
    assert.strictEqual(f(7, 8, 9, 10), 16);
    assert.strictEqual(f(7, 8, 9, 20), 20);
  });

  it('has the correct arity', () => {
    assert.strictEqual(f.length, 3);
  });

});
