import {Identity} from '../functor/Identity';
import {curry} from '../functional/curry';

export const over =
  curry(
    (lens, fn, x) =>
      lens(y => new Identity(fn(y)))(x).value
  );
