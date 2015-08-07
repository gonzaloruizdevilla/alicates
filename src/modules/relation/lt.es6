import {curry} from '../functional/curry';

export const lt =
  curry(
    (a, b) => a < b
  );
