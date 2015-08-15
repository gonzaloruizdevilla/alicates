import {curry} from '../functional/curry';

export const join =
  curry(
    (y, xs) => xs.join(y)
  );
