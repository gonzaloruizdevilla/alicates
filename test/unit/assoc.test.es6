let assert = require('chai').assert;

import {assoc} from '../../src/index.es6';

describe('assoc', () => {
  it('makes a shallow clone of an object, overriding only the specified property', () => {
    let obj1 = {a: 1, b: {c: 2, d: 3}, e: 4, f: 5, g: [1,2,3]};
    let obj2 = assoc('e', {x: 42}, obj1);
    assert.deepEqual(obj2, {a: 1, b: {c: 2, d: 3}, e: {x: 42}, f: 5, g: [1,2,3]});

    assert.strictEqual(obj2.a, obj1.a);
    assert.strictEqual(obj2.b, obj1.b);
    assert.strictEqual(obj2.f, obj1.f);
  });

  it('is the equivalent of clone and set if the property is not on the original', () => {
    let obj1 = {a: 1, b: {c: 2, d: 3}, e: 4, f: 5};
    let obj2 = assoc('z', {x: 42}, obj1);
    assert.deepEqual(obj2, {a: 1, b: {c: 2, d: 3}, e: 4, f: 5, z: {x: 42}});

    assert.strictEqual(obj2.a, obj1.a);
    assert.strictEqual(obj2.b, obj1.b);
    assert.strictEqual(obj2.f, obj1.f);
  });

  it('is curried', () => {
    let obj1 = {a: 1, b: {c: 2, d: 3}, e: 4, f: 5};
    let expected = {a: 1, b: {c: 2, d: 3}, e: {x: 42}, f: 5};
    let f = assoc('e');
    let g = f({x: 42});
    assert.deepEqual(f({x: 42}, obj1), expected);
    assert.deepEqual(g(obj1), expected);
  });
});
