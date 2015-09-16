import {curry} from '../functional/curry';

export const or =
  curry(
    (a,b) => a || b
  );
