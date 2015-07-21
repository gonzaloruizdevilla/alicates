import {curry} from '../functional/curry';

const _unfold =
  (fn, res, acc) =>
    res ? _unfold(fn, fn(res[1]), [...acc, res[0]])
        : acc;

export
  const unfold = curry(
    (fn, seed) => _unfold(fn, fn(seed), [])
  );
