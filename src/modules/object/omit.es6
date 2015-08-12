import {curry} from '../functional/curry';
import {contains} from '../list/contains';
import {reduce} from '../list/reduce';
import {keysIn} from './keysIn';

export const omit =
  curry(
    (excludeKeys, obj) =>
      reduce(
        (acc, key) => contains(key, excludeKeys) ? acc
                                                 : (acc[key] = obj[key], acc),
        {},
        keysIn(obj)
      )
  );
