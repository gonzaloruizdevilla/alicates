import {shallowClone} from './shallowClone';
import {init} from '../list/init';
import {last} from '../list/last';
import {reduce} from '../list/reduce';
import {curry} from '../functional/curry';

export const dissocPath =
  curry(
    (keys, obj) => {
      let newObj = shallowClone(obj);
      let ref = newObj;
      if (keys.length) {
        reduce(
          (acc, key) => (
              ref = (
                acc[key] ? (acc[key] = shallowClone(acc[key]))
                : {}
          )),
          newObj,
          init(keys)
        );
        delete ref[last(keys)];
      }
      return newObj;
    }
  );
