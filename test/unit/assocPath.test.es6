let assert = require('chai').assert;

import {assocPath} from '../../src/index.es6';

describe('assocPath', () => {
  it('makes a shallow clone of an object, overriding only what is necessary for the path', () => {
    let obj1 = {a: {b: 1, c: 2, d: {e: 3}}, f: {g: {h: 4, i: 5, j: {k: 6, l: 7}}}, m: 8, n: [1,2,3]};
    let obj2 = assocPath(['f', 'g', 'i'], {x: 42}, obj1);
    assert.deepEqual(obj2,
      {a: {b: 1, c: 2, d: {e: 3}}, f: {g: {h: 4, i: {x: 42}, j: {k: 6, l: 7}}}, m: 8, n: [1,2,3]}
    );

    assert.strictEqual(obj2.a, obj1.a);
    assert.strictEqual(obj2.m, obj1.m);
    assert.strictEqual(obj2.f.g.h, obj1.f.g.h);
    assert.strictEqual(obj2.f.g.j, obj1.f.g.j);
  });

  it('is the equivalent of clone and setPath if the property is not on the original', () => {
    let obj1 = {a: 1, b: {c: 2, d: 3}, e: 4, f: 5};
    let obj2 = assocPath(['x', 'y', 'z'], {w: 42}, obj1);
    assert.deepEqual(obj2, {a: 1, b: {c: 2, d: 3}, e: 4, f: 5, x: {y: {z: {w: 42}}}});

    assert.strictEqual(obj2.a, obj1.a);
    assert.strictEqual(obj2.b, obj1.b);
    assert.strictEqual(obj2.f, obj1.f);
  });

  it('is curried', () => {
    let obj1 = {a: {b: 1, c: 2, d: {e: 3}}, f: {g: {h: 4, i: 5, j: {k: 6, l: 7}}}, m: 8};
    let expected = {a: {b: 1, c: 2, d: {e: 3}}, f: {g: {h: 4, i: {x: 42}, j: {k: 6, l: 7}}}, m: 8};
    let f = assocPath(['f', 'g', 'i']);
    let g = f({x: 42});
    assert.deepEqual(f({x: 42}, obj1), expected);
    assert.deepEqual(g(obj1), expected);
  });

  it('accepts empty path', () => {
    assert.deepEqual(assocPath([], 3, {a: 1, b: 2}), {a: 1, b: 2});
  });
});
