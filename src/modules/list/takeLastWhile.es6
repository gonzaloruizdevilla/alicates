import {curry} from '../functional/curry';

const _takeLastWhile =
  (fn, xs, pos) =>
    (pos === -1) ? xs :
    fn(xs[pos])  ? _takeLastWhile(fn, xs, pos - 1)
                 : xs.slice(pos + 1, Infinity);

export const takeLastWhile =
  curry(
    (fn, xs) => _takeLastWhile(fn, xs, xs && xs.length - 1)
  );
