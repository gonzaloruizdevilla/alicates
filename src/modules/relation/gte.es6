import {curry} from '../functional/curry';

export const gte =
  curry(
    (a, b) => a >= b
  );
