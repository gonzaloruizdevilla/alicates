import {curry} from '../functional/curry';

const _zipObj =
  ([x1,...arr1], [x2,...arr2], acc) =>
    x1 === undefined ? acc
                     : _zipObj(arr1, arr2, (acc[x1] = x2, acc));

export const zipObj =
  curry(
    (arr1, arr2) =>
      _zipObj(arr1, arr2, {})
  );
