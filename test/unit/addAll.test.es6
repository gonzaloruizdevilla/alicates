let assert = require('chai').assert;

import {addAll} from '../../src/index.es6';

describe('addAll', () => {
  it('should add all the arguments', () => {
    assert.equal(addAll(1,2,3), 6);
  });
});
