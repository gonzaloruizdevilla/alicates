import {curry} from '../functional/curry';

export const sort =
  curry(
    (fn, xs) => [...xs].sort(fn)
  );
