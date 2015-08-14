import {curry} from '../functional/curry';

export const assoc =
  curry(
    (key, value, obj) => {
      let newObj = Object.create(obj);
      newObj[key] = value;
      return newObj;
    }
  );
