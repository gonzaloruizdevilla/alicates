import {curry} from '../functional/curry';

export const split =
  curry(
    (sep, s) => s.split(sep)
  );
