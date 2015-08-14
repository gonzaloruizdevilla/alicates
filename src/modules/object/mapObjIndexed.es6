import {keys} from './keys';
import {reduce} from '../list/reduce';
import {curry} from '../functional/curry';

export const mapObjIndexed =
  curry(
    (fn, a) =>
      reduce(
        (acc, key) => (acc[key] = fn(a[key], key, a), acc),
        {},
        keys(a)
      )
  );
