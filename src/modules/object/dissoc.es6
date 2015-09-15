import {curry} from '../functional/curry';
import {shallowClone} from './shallowClone';

export const dissoc =
  curry(
    (key, obj) => {
      let newObj = shallowClone(obj);
      delete newObj[key];
      return newObj;
    }
  );
