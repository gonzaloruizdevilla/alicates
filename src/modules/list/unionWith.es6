import {concat} from './concat';
import {uniqWith} from './uniqWith';
import {curry} from '../functional/curry';

export const unionWith =
  curry((fn, xs, ys) =>
    uniqWith(fn, concat(xs,ys))
  );
