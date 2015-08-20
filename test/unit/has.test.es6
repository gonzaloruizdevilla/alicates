let assert = require('chai').assert;

import {has, __} from '../../src/index.es6';

describe('has', function() {
  let fred = {name: 'Fred', age: 23};
  let anon = {age: 99};

  it('returns true if the specified property is present', function() {
    assert.strictEqual(has('name', fred), true);
  });

  it('returns false if the specified property is absent', function() {
    assert.strictEqual(has('name', anon), false);
  });

  it('does not check properties from the prototype chain', function() {
    class Person {
      constructor(){}
      age(){}
    }

    let bob = new Person();
    assert.strictEqual(has('age', bob), false);
  });

  it('is curried, op-style', function() {
    let hasName = has('name');
    assert.strictEqual(hasName(fred), true);
    assert.strictEqual(hasName(anon), false);

    var point = {x: 0, y: 0};
    var pointHas = has(__, point);
    assert.strictEqual(pointHas('x'), true);
    assert.strictEqual(pointHas('y'), true);
    assert.strictEqual(pointHas('z'), false);
    
  });
});
