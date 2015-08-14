import {init} from '../list/init';
import {last} from '../list/last';
import {reduce} from '../list/reduce';
import {curry} from '../functional/curry';

export const assocPath =
  curry(
    (keys, value, obj) => {
      let newObj = Object.create(obj);
      if (keys.length) {
        reduce(
          (acc, key) => (acc[key] = acc[key] || {}),
          newObj,
          init(keys)
        )[last(keys)] = value;
      }
      return newObj;
    }
  );
