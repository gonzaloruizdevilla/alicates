import {reduce} from '../list/reduce';
import {curry} from '../functional/curry';

export const pick =
  curry(
    (keys, obj) =>
      reduce(
        (acc, key) => (obj[key] !== undefined ? acc[key] = obj[key] : void 0, acc),
        {},
        keys
      )
  );
