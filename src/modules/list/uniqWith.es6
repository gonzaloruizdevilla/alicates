import {curry} from '../functional/curry';
import {none} from './none';
import {reduce} from './reduce';

export const uniqWith =
  curry(
    (fn, xs) => reduce(
      (acc, x) => (
        none(y => fn(y,x), acc) ? [...acc, x]
                                : acc
      ), [], xs)
  );
