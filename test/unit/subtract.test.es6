let assert = require('chai').assert;

import {subtract} from '../../src/index.es6';


describe('subtract', () => {

  it('subtracts two numbers', function() {
    assert.strictEqual(subtract(22, 7), 15);
  });

  it('is curried', function() {
    var ninesCompl = subtract(9);
    assert.strictEqual(ninesCompl(6), 3);
  });

/*
 it('behaves right curried when passed `__` for its first argument', function() {
   var minus5 = subtract(__, 5);
   assert.strictEqual(minus5(17), 12);
 });
*/
});
