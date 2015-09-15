import {curry} from '../functional/curry';
import {shallowClone} from './shallowClone';

export const assoc =
  curry(
    (key, value, obj) => {
      let newObj = shallowClone(obj);
      newObj[key] = value;
      return newObj;
    }
  );
