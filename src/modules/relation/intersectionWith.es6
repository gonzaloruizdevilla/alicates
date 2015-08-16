import {contains} from '../list/contains';
import {reduce} from '../list/reduce';
import {curry} from '../functional/curry';

export const intersectionWith =
  curry(
    (fn, xs, ys) =>
      reduce(
        (acc, x) => contains(x, ys) ? [...acc, x] : acc,
        [],
        xs
      )
  );
