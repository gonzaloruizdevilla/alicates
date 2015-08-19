let assert = require('chai').assert;

import {countBy, identity, prop} from '../../src/index.es6';


let albums = [
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
let derivedGenre = (() => {
  let remap = {
    Baroque: 'Classical',
    Modern: 'Classical',
    Romantic: 'Classical',
    Metal: 'Rock'  /*, etc */
  };
  return function(album) {
    let genre = prop('genre', album);
    return remap[genre] || genre;
  };
})();


describe('countBy', () => {
  it('counts by a simple property of the objects', () => {
    assert.deepEqual(countBy(prop('genre'), albums), {
      Baroque: 2, Rock: 2, Jazz: 2, Romantic: 1, Metal: 1, Modern: 1, Broadway: 1, Folk: 1, Classical: 1
    });
  });

  it('counts by a more complex function on the objects', () => {
    assert.deepEqual(countBy(derivedGenre, albums), {
      Classical: 5, Rock: 3, Jazz: 2, Broadway: 1, Folk: 1
    });
  });

  it('is curried', () => {
    let counter = countBy(prop('genre'));
    assert.deepEqual(counter(albums), {
      Baroque: 2, Rock: 2, Jazz: 2, Romantic: 1, Metal: 1, Modern: 1, Broadway: 1, Folk: 1, Classical: 1
    });
  });

  it('ignores inherited properties', () => {
    let result = countBy(identity, ['abc', 'toString']);
    assert.strictEqual(result.abc, 1);
    assert.strictEqual(result.toString, 1);
  });
});
