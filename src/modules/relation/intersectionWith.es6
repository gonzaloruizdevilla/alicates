import {contains} from '../list/contains';
import {reduce} from '../list/reduce';
import {uniq} from '../list/uniq';
import {curry} from '../functional/curry';
import {compose} from '../functional/compose';

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
