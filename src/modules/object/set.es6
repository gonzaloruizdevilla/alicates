import {curry} from '../functional/curry';
import {Identity} from '../functor/Identity';

export const set =
    curry(
      (lens, value, x) =>
        lens(y => new Identity(value))(x).value
    );
