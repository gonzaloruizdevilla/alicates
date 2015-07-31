import {curry} from '../functional/curry';

const _scan =
  (fn, result, [x, ...xs], length) =>
    length === 0 ? result
                 : (
                     result[result.length] = fn(result[result.length - 1], x),
                     _scan(fn, result, xs, length - 1)
                   );

export const scan =
  curry(
    (fn, acc, xs) => _scan(fn, [acc], xs, xs.length)
  );
