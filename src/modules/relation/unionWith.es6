import {concat} from '../list/concat';
import {uniqWith} from '../list/uniqWith';
import {curry} from '../functional/curry';

export const unionWith =
  curry((fn, xs, ys) =>
    uniqWith(fn, concat(xs,ys))
  );
