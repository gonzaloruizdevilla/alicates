import {isArray} from '../type/isArray';
import {isFunction} from '../type/isFunction';

export const hasMethod =
  (name, a) =>
    a && !isArray(a) && isFunction(a[name]);
