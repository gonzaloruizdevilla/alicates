import {curry} from '../functional/curry';

export const takeLast =
  curry(
    (n, xs) => xs.slice(
      n < 0   ? 0 :
      n === 0 ? xs.length
              : -n
      )
  );
