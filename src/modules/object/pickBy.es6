import {curry} from '../functional/curry';
import {keysIn} from './keysIn';
import {reduce} from '../list/reduce';

export const pickBy =
  curry(
    (fn, obj) =>
      reduce(
        (acc, key) => (fn(obj[key], key, obj) ? (acc[key] = obj[key]) : void 0, acc),
        {},
        keysIn(obj)
      )
  );
