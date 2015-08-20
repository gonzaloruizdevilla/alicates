let assert = require('chai').assert;

import {dissocPath} from '../../src/index.es6';

describe('dissocPath', () => {
  it('makes a shallow clone of an object, omitting only what is necessary for the path', () => {
    let obj1 = {a: {b: 1, c: 2, d: {e: 3}}, f: {g: {h: 4, i: 5, j: {k: 6, l: 7}}}, m: 8};
    let obj2 = dissocPath(['f', 'g', 'i'], obj1);
    assert.deepEqual(obj2,
      {a: {b: 1, c: 2, d: {e: 3}}, f: {g: {h: 4, j: {k: 6, l: 7}}}, m: 8}
    );
    // Note: reference equality below!
    assert.strictEqual(obj2.a, obj1.a);
    assert.strictEqual(obj2.m, obj1.m);
    assert.strictEqual(obj2.f.g.h, obj1.f.g.h);
    assert.strictEqual(obj2.f.g.j, obj1.f.g.j);
  });

  it('does not try to omit inner properties that do not exist', () => {
    let obj1 = {a: 1, b: {c: 2, d: 3}, e: 4, f: 5};
    let obj2 = dissocPath(['x', 'y', 'z'], obj1);
    assert.deepEqual(obj2, {a: 1, b: {c: 2, d: 3}, e: 4, f: 5});
    // Note: reference equality below!
    assert.strictEqual(obj2.a, obj1.a);
    assert.strictEqual(obj2.b, obj1.b);
    assert.strictEqual(obj2.f, obj1.f);
  });

  it('leaves an empty object when all properties omitted', () => {
    let obj1 = {a: 1, b: {c: 2}, d: 3};
    let obj2 = dissocPath(['b', 'c'], obj1);
    assert.deepEqual(obj2,
      {a: 1, b: {}, d: 3}
    );
  });

  it('flattens properties from prototype', () => {
    let F = function() {};
    F.prototype.a = 1;
    let obj1 = new F();
    obj1.b = {c: 2, d: 3};
    let obj2 = dissocPath(['b', 'c'], obj1);
    assert.deepEqual(obj2,
      {a: 1, b: {d: 3}}
    );
  });

  it('is curried', () => {
    let obj1 = {a: {b: 1, c: 2, d: {e: 3}}, f: {g: {h: 4, i: 5, j: {k: 6, l: 7}}}, m: 8};
    let expected = {a: {b: 1, c: 2, d: {e: 3}}, f: {g: {h: 4, j: {k: 6, l: 7}}}, m: 8};
    let f = dissocPath(['f', 'g', 'i']);
    assert.deepEqual(f(obj1), expected);
  });

  it('accepts empty path', () => {
    assert.deepEqual(dissocPath([], {a: 1, b: 2}), {a: 1, b: 2});
  });
});
