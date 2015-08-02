import {curry} from '../functional/curry';

export const multiply =
  curry(
    (x,y) => x * y
  );
