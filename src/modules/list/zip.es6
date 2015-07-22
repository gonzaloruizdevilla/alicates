import {curry} from '../functional/curry';


const _zip =
  ([x1,...arr1], [x2,...arr2], acc) =>
    x1 === undefined || x2 === undefined ? acc
                                         : _zip(arr1, arr2, [...acc, [x1, x2]]);

export
  const zip = curry((arr1, arr2) => _zip(arr1, arr2, []));
