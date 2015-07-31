import {curry} from '../functional/curry';

const _takeWhile =
  (fn, [x, ...xs], acc) =>
    xs.length > 0 ? (fn(x) ? _takeWhile(fn, xs, [...acc, x]) : acc)
                  : (fn(x) ? [...acc, x] : acc);

export const takeWhile =
  curry(
    (fn, xs) => _takeWhile(fn, xs, [])
  );
