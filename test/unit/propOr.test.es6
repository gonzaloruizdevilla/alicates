let assert = require('chai').assert;

import {propOr} from '../../src/index.es6';

describe('propOr', () => {
  let fred = {name: 'Fred', age: 23};
  let anon = {age: 99};

  let nm = propOr('Unknown', 'name');

  it('returns a function that fetches the appropriate property', () => {
    assert.strictEqual(typeof nm, 'function');
    assert.strictEqual(nm(fred), 'Fred');
  });

  it('returns the default value when the property does not exist', () => {
    assert.strictEqual(nm(anon), 'Unknown');
  });

  it('returns the default value when the object is nil', () => {
    assert.strictEqual(nm(null), 'Unknown');
    assert.strictEqual(nm(void 0), 'Unknown');
  });

  it('does not return properties from the prototype chain', () => {
    let Person = function() {};
    Person.prototype.age = function() {};

    var bob = new Person();
    assert.strictEqual(propOr(100, 'age', bob), 100);
  });
});
