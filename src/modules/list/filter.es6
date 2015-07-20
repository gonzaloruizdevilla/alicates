import {curry} from '../functional/curry';
import {reduce} from './reduce';

export
  const filter = curry((fn, arr) => reduce((acc, x) => fn(x) ? [...acc, x] : acc, [], arr));
