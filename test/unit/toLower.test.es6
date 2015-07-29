let assert = require('chai').assert;

import {toLower} from '../../src/index.es6';

describe('toLower', function() {
  it('returns the lower-case equivalent of the input string', () => {
    assert.strictEqual(toLower('XYZ'), 'xyz');
  });
});
