import {curry} from '../functional/curry';

export const modulo =
  curry(
    (x, y) => x % y
  );
