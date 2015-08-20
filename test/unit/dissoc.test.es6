let assert = require('chai').assert;

import {dissoc} from '../../src/index.es6';

describe('dissoc', function() {
  it('copies an object omitting the specified property', function() {
    assert.deepEqual(dissoc('b', {a: 1, b: 2, c: 3}), {a: 1, c: 3});
    assert.deepEqual(dissoc('d', {a: 1, b: 2, c: 3}), {a: 1, b: 2, c: 3});
  });

  it('includes prototype properties', function() {
    function Rectangle(width, height) {
      this.width = width;
      this.height = height;
    }
    var area = Rectangle.prototype.area = function() {
      return this.width * this.height;
    };
    var rect = new Rectangle(7, 6);

    assert.deepEqual(dissoc('area', rect), {width: 7, height: 6});
    assert.deepEqual(dissoc('width', rect), {height: 6, area: area});
    assert.deepEqual(dissoc('depth', rect), {width: 7, height: 6, area: area});
  });

  it('is curried', function() {
    assert.deepEqual(dissoc('b')({a: 1, b: 2, c: 3}), {a: 1, c: 3});
  });
});
