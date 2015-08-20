import {shallowClone} from './shallowClone';
import {curry} from '../functional/curry';

export const dissoc =
  curry(
    (key, obj) => {
      let newObj = shallowClone(obj);
      delete newObj[key];
      return newObj;
    }
  );
