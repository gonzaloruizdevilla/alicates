import {concat} from '../list/concat';
import {curry} from '../functional/curry';
import {uniqWith} from '../list/uniqWith';

export const unionWith =
  curry((fn, xs, ys) =>
    uniqWith(fn, concat(xs,ys))
  );
