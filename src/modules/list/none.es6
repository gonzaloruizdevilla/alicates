import {curry} from '../functional/curry';

const _none =
  (fn, [x,...xs], length) =>
    length === 0 ? true
                 : fn(x) ? false
                         : _none(fn, xs, length - 1);

export
  const none = curry(
    (fn, xs) => _none(fn, xs, xs.length)
  );
