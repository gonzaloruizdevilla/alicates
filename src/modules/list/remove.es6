import {curry} from '../functional/curry';

export const remove =
  curry(
    (start, count, xs) => xs.slice(0, start).concat(xs.slice(start + count))
  );
