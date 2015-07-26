import {curry} from '../functional/curry';
import {equals} from '../logic/equals';
import {uniqWith} from './uniqWith';

export const uniqBy =
  curry(
    (fn, xs) => uniqWith((x,y) => equals(fn(x), fn(y)), xs)
  );
