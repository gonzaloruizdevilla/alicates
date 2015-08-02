import {concat} from '../list/concat';
import {curry} from '../functional/curry';
import {uniq} from '../list/uniq';

export const union =
  curry(
    (xs, ys) => uniq(concat(xs, ys))
  );
