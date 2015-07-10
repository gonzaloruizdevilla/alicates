let assert = require('chai').assert;

import {add} from '../../src/index.es6';

describe('add', () => {
    it('should add two values', () =>{
      assert.equal(add(1,2), 3);
    });

    it('should be curried', () => {
      assert.equal(add(1)(2), 3);
    });
});
