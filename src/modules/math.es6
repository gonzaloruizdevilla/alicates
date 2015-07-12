import {curry} from './functional/curry';
import {reduce} from './list'

export
  const add = curry((a, b) => a + b);

export
    const addAll = (...args) => reduce(add, 0, args);
