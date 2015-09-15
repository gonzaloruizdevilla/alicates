import {Identity} from '../functor/Identity';
import {curry} from '../functional/curry';

export const set =
    curry(
      (lens, value, x) =>
        lens(() => new Identity(value))(x).value
    );
