import {curry} from '../functional/curry';

const _zipWith =
  (fn, iter1, iter2, acc) => {
    var {value, done} = iter1.next();
    var pair = iter2.next();
    return done || pair.done ? acc
                             : _zipWith(fn, iter1, iter2, [...acc, fn(value, pair.value)]);
  };

export const zipWith =
  curry(
    (fn, xs, ys) =>
      _zipWith(fn, xs[Symbol.iterator](), ys[Symbol.iterator](), [])
  );
