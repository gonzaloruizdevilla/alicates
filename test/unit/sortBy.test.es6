let assert = require('chai').assert;

import {identity, prop, sortBy} from '../../src/index.es6';

var albums = [
  {title: 'Art of the Fugue', artist: 'Glenn Gould', genre: 'Baroque'},
  {title: 'A Farewell to Kings', artist: 'Rush', genre: 'Rock'},
  {title: 'Timeout', artist: 'Dave Brubeck Quartet', genre: 'Jazz'},
  {title: 'Fly By Night', artist: 'Rush', genre: 'Rock'},
  {title: 'Goldberg Variations', artist: 'Daniel Barenboim', genre: 'Baroque'},
  {title: 'New World Symphony', artist: 'Leonard Bernstein', genre: 'Romantic'},
  {title: 'Romance with the Unseen', artist: 'Don Byron', genre: 'Jazz'},
  {title: 'Somewhere In Time', artist: 'Iron Maiden', genre: 'Metal'},
  {title: 'In Times of Desparation', artist: 'Danny Holt', genre: 'Modern'},
  {title: 'Evita', artist: 'Various', genre: 'Broadway'},
  {title: 'Five Leaves Left', artist: 'Nick Drake', genre: 'Folk'},
  {title: 'The Magic Flute', artist: 'John Eliot Gardiner', genre: 'Classical'}
];


describe('sortBy', () => {
  it('sorts by a simple property of the objects', () => {
    var sortedAlbums = sortBy(prop('title'), albums);
    assert.strictEqual(sortedAlbums.length, albums.length);
    assert.strictEqual(sortedAlbums[0].title, 'A Farewell to Kings');
    assert.strictEqual(sortedAlbums[11].title, 'Timeout');
  });

  it('is curried', () => {
    var sorter = sortBy(prop('title'));
    var sortedAlbums = sorter(albums);
    assert.strictEqual(sortedAlbums.length, albums.length);
    assert.strictEqual(sortedAlbums[0].title, 'A Farewell to Kings');
    assert.strictEqual(sortedAlbums[11].title, 'Timeout');
  });

  it('preserves object identity', () => {
    var a = {value: 'a'};
    var b = {value: 'b'};
    var result = sortBy(prop('value'), [b, a]);
    assert.strictEqual(result[0], a);
    assert.strictEqual(result[1], b);
  });

  it('sorts array-like object', () => {
    var args = (function() { return arguments; }('c', 'a', 'b'));
    var result = sortBy(identity, args);
    assert.strictEqual(result[0], 'a');
    assert.strictEqual(result[1], 'b');
    assert.strictEqual(result[2], 'c');
  });
});
