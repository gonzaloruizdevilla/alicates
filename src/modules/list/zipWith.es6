import {curryN} from '../functional/curry';

const _zipWith =
  (fn, iter1, iter2, acc) => {
    var {value, done} = iter1.next();
    var pair = iter2.next();
    return done || pair.done ? acc
                             : _zipWith(fn, iter1, iter2, [...acc, fn(value, pair.value)]);
  }

export const zipWith =
  curryN(
    3,
    (fn, xf1, xf2, xf3) =>
      _zipWith(fn, xf1[Symbol.iterator](), xf2[Symbol.iterator](), [])
  );
