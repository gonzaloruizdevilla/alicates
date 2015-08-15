let assert = require('chai').assert;

import {assoc, compose, lens, lensProp, lensIndex, over, set, prop, view, toString, toUpper} from '../../src/index.es6';

let eq = function(actual, expected) {
  assert.strictEqual(toString(actual), toString(expected));
};


let alice = {
  name: 'Alice Jones',
  address: ['22 Walnut St', 'San Francisco', 'CA']
};


describe('view, over, and set', function() {
  let nameLens = lens(prop('name'), assoc('name'));
  let addressLens = lensProp('address');
  let headLens = lensIndex(0);

  it('may be applied to a lens created by `lens`', function() {
    eq(view(nameLens, alice), 'Alice Jones');

    eq(over(nameLens, toUpper, alice),
       {name: 'ALICE JONES',
        address: ['22 Walnut St', 'San Francisco', 'CA']});


    eq(set(nameLens, 'Alice Smith', alice),
       {name: 'Alice Smith',
        address: ['22 Walnut St', 'San Francisco', 'CA']});
  });

  it('may be applied to a lens created by `lensIndex`', function() {
    eq(view(headLens, alice.address), '22 Walnut St');

    eq(over(headLens, toUpper, alice.address),
       ['22 WALNUT ST', 'San Francisco', 'CA']);

    eq(set(headLens, '52 Crane Ave', alice.address),
       ['52 Crane Ave', 'San Francisco', 'CA']);
  });

  it('may be applied to composed lenses', function() {
    let streetLens = compose(addressLens, headLens);

    eq(view(streetLens, alice), '22 Walnut St');

    eq(over(streetLens, toUpper, alice),
       {name: 'Alice Jones',
        address: ['22 WALNUT ST', 'San Francisco', 'CA']});

    eq(set(streetLens, '52 Crane Ave', alice),
       {name: 'Alice Jones',
        address: ['52 Crane Ave', 'San Francisco', 'CA']});
  });

});
