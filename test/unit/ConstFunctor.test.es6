let assert = require('chai').assert;

import {add, Const} from '../../src/index.es6';

describe('Const', () => {
  it('has value and map properties', () => {
    let x = new Const(1);
    assert.equal(x.value, 1);
    assert.equal(typeof x.map, 'function');
  });

  it('map returns itself', () =>{
    let add2 = add(2);
    let x = new Const(1);
    let y = x.map(add2);
    assert.equal(x, y);
  });
});
