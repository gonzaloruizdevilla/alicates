let assert = require('chai').assert;

import {wrap} from '../../src/index.es6';



describe('wrap', () => {
  let greet = name => `Hello ${name}`;

  it('allows you to modify the parameters', () => {
    let extendedGreet = wrap(greet, (gr, name) => gr(name.toUpperCase()));

    assert.strictEqual(greet('joe'), 'Hello joe');
    assert.strictEqual(extendedGreet('joe'), 'Hello JOE');
  });

  it('allows you to modify the output', () => {
    let extendedGreet = wrap(greet, (gr, name) => gr(name).toUpperCase());

    assert.strictEqual(extendedGreet('joe'), 'HELLO JOE');
  });

  it('allows you to entirely replace the input function', () => {
    let extendedGreet = wrap(greet, (gr, name) => gr('my dear ' + name) + ', how are you?');

    assert.strictEqual(extendedGreet('joe'), 'Hello my dear joe, how are you?');
  });


  it('maintains the arity of the function that is being wrapped', () => {
    let extendedGreet = wrap(greet, (gr, name) => gr('my dear ' + name) + ', how are you?');

    assert.strictEqual(greet.length, extendedGreet.length);
  });

  it('returns a curried function', () => {
    let sideEffect;
    let add = (a, b) => a + b;
    let wrappedAdd = wrap(add, (plus, a, b) => (sideEffect = plus(a, b)));
    let add10 = wrappedAdd(10);

    assert.equal(add10(5), 15);
    assert.equal(sideEffect, 15);
  });

});
