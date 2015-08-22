let assert = require('chai').assert;

import {hasIn} from '../../src/index.es6';

describe('hasIn', () => {
  let fred = {name: 'Fred', age: 23};
  let anon = {age: 99};

  it('returns a function that checks the appropriate property', () => {
    var nm = hasIn('name');
    assert.strictEqual(typeof nm, 'function');
    assert.strictEqual(nm(fred), true);
    assert.strictEqual(nm(anon), false);
  });

  it('checks properties from the prototype chain', () => {
    class Person {
      constructor() {}
      age() {}
    }

    var bob = new Person();
    assert.strictEqual(hasIn('age', bob), true);
  });

  it('works properly when called with two arguments', () => {
    assert.strictEqual(hasIn('name', fred), true);
    assert.strictEqual(hasIn('name', anon), false);
  });
});
