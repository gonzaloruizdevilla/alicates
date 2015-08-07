import {curry} from '../functional/curry';

export const gt =
  curry(
    (a, b) => a > b
  );
