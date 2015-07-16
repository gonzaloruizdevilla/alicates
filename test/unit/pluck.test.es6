let assert = require('assert');

import {pluck} from '../../src/index.es6';


describe('pluck', () => {
  let people = [
    {name: 'Fred', age: 23},
    {name: 'Wilma', age: 21} ,
    {name: 'Pebbles', age: 2}
  ];

  it('returns a function that maps the appropriate property over an array', () => {
    let nm = pluck('name');
    assert.strictEqual(typeof nm, 'function');
    assert.deepEqual(nm(people), ['Fred', 'Wilma', 'Pebbles']);
  });

});
