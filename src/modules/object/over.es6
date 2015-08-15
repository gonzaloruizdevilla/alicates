import {curry} from '../functional/curry';

let Identity =
  x => (
    {
      value: x,
      map: f => new Identity(f(x))
    }
  )

export const over =
  curry(
    (lens, fn, x) =>
      lens(y => new Identity(fn(y)))(x).value
  );
