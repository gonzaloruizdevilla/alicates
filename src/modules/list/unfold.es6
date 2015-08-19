import {curry} from '../functional/curry';

const _unfold =
  (fn, res, acc) =>
    res ? _unfold(fn, fn(res[1]), (acc[acc.length] = res[0], acc))
        : acc;

export
  const unfold = curry(
    (fn, seed) => _unfold(fn, fn(seed), [])
  );
