import {curry} from '../functional/curry';

const _containsWith =
  (fn, x, arr, pos, max) =>
    pos === max     ? false :
    fn(x, arr[pos]) ? true
                    : _containsWith(fn, x, arr, pos + 1, max);

export const containsWith =
  curry(
    (fn, x, arr) =>
      _containsWith(fn, x, arr, 0, arr.length)
  );
