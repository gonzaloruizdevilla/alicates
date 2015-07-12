let assert = require('chai').assert;

import {or} from '../../src/index.es6';

describe('or', () => {
  it('applies the || operator', function() {
   let someAr = [];
   assert.strictEqual(or(1, 0), 1);
   assert.strictEqual(or(0, 1), 1);
   assert.strictEqual(or(someAr, false), someAr);
   assert.strictEqual(or('', 0), 0);
 });

 it('is curried', function() {
   assert.strictEqual(or('something')(false), 'something');
   assert.strictEqual(or(false)(true), true);
   assert.strictEqual(or('')(0), 0);
 });
});
