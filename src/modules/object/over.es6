import {curry} from '../functional/curry';
import {Identity} from '../functor/Identity';

export const over =
  curry(
    (lens, fn, x) =>
      lens(y => new Identity(fn(y)))(x).value
  );
