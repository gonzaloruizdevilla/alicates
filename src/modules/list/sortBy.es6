import {curry} from '../functional/curry';

export const sortBy =
  curry(
    (fn, xs) => Array.prototype.sort.call(xs, (a,b) => fn(a) < fn(b)  ? -1 : 1 )
  );
