import {contains} from '../list/contains';
import {curry} from '../functional/curry';
import {keysIn} from './keysIn';
import {reduce} from '../list/reduce';

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
