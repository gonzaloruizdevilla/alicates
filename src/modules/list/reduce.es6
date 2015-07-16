import {curry} from '../functional/curry';

export
  const reduce = curry((fn, acc, [x, ...arr]) => x !== undefined ? reduce(fn, fn(acc, x), arr) : acc);
