import {curry} from '../functional/curry';
import {equals} from '../logic/equals';

const _contains =
  (x, arr, pos, max) =>
    pos === max         ? false :
    equals(x, arr[pos]) ? true
                        : _contains(x, arr, pos + 1, max);

export
  const contains = curry(
    (x, arr) => _contains(x, arr, 0, arr.length)
  );
