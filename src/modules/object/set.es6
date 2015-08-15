import {curry} from '../functional/curry';

let Identity =
  x => (
    {
      value: x,
      map: f => new Identity(f(x))
    }
  )

export const set =
    curry(
      (lens, value, x) =>
        lens(y => new Identity(value))(x).value
    );
