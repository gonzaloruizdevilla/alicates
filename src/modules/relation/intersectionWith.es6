import {compose} from '../functional/compose';
import {contains} from '../list/contains';
import {curry} from '../functional/curry';
import {reduce} from '../list/reduce';
import {uniq} from '../list/uniq';

export const intersectionWith =
  curry(
    (fn, xs, ys) =>
      compose(
        uniq,
        reduce(
          (acc, y) => contains(y, xs) ? [...acc, y] : acc,
          []
        )
      )(ys)
  );
