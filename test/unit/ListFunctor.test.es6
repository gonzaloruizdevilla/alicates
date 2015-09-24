let assert = require('chai').assert;

import {add, equals, toString, cons, Nil} from '../../src/index.es6';

describe('List', () => {
  it('has a toString function', () => {
    let x = Nil;
    let y = cons(1, Nil);
    assert.equal(toString(x), 'Nil');
    assert.equal(toString(y), 'Cons(1, Nil)');
  });

  it('maps', () => {
    assert.ok(equals(Nil.map(add(2)), Nil));
    assert.ok(equals(cons(2, cons(1, Nil)).map(add(2)), cons(4, cons(3, Nil))));
  });
});
