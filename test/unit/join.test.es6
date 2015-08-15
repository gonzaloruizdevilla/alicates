let assert = require('chai').assert;

import {join} from '../../src/index.es6';

describe('join', () => {
  it('concatenates a list\'s elements to a string, with an seperator string between elements', () => {
    var list = [1, 2, 3, 4];
    assert.strictEqual(join('~', list), '1~2~3~4');
  });
});
