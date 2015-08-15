import {shallowClone} from './shallowClone';
import {curry} from '../functional/curry';

export const assoc =
  curry(
    (key, value, obj) => {
      let newObj = shallowClone(obj);
      newObj[key] = value;
      return newObj;
    }
  );
