import {isNil} from '../type/isNil';
import {curry} from '../functional/curry';

export const defaultTo =
  curry(
    (x, y) => isNil(y) ? x
                       : y
  );
