import {concat} from './concat';
import {curry} from '../functional/curry';
import {uniq} from './uniq';

export const union =
  curry(
    (xs, ys) => uniq(concat(xs, ys))
  );
