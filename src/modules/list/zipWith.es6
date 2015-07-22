import {curry} from '../functional/curry';

const _zipWith =
  (fn, [x1,...arr1], [x2,...arr2], acc) =>
    x1 === undefined || x2 === undefined ? acc
                                         : _zipWith(fn, arr1, arr2, [...acc, fn(x1, x2)]);

export const zipWith =
  curry(
    (fn, arr1, arr2) =>
      _zipWith(fn, arr1, arr2, [])
  );
