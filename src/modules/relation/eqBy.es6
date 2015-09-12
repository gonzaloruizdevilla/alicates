import {curry} from '../functional/curry';
import {equals} from '../logic/equals';

export const eqBy =
  curry(
    (fn, a, b) =>
      equals(fn(a), fn(b))
  );
