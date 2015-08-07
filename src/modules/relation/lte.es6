import {curry} from '../functional/curry';

export const lte =
  curry(
    (a, b) => a <= b
  );
