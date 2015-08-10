import {reduce} from '../list/reduce';
import {curry} from '../functional/curry';

export const pickAll =
  curry(
    (keys, obj) =>
      reduce(
        (acc, key) => (acc[key] = obj[key], acc),
        {},
        keys
      )
  );
