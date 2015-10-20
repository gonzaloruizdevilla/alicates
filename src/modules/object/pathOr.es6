import {curry} from '../functional/curry';
import {path} from './path';
import {isNil} from '../type/isNil';

export const pathOr =
  curry(
    (orValue, propPath, obj) => {
      const value = path(propPath, obj);
      return isNil(value) ? orValue : value;
    }
  );
