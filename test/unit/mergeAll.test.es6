let assert = require('chai').assert;

import {mergeAll} from '../../src/index.es6';

describe('mergeAll', () => {

  it('merges a list of objects together into one object', () => {
    assert.deepEqual(mergeAll([{foo:1}, {bar:2}, {baz:3}]), {foo:1, bar:2, baz:3});
  });

  it('gives precedence to later objects in the list', () => {
    assert.deepEqual(mergeAll([{foo:1}, {foo:2}, {bar:2}]), {foo:2, bar:2});
  });

  it('ignores inherited properties', () => {
    function Foo() {}
    Foo.prototype.bar = 42;
    let foo = new Foo();
    let res = mergeAll([foo, {fizz: 'buzz'}]);
    assert.deepEqual(res, {fizz: 'buzz'});
  });

});
