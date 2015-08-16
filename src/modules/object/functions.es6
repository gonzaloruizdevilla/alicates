import {isFunction} from '../type/isFunction';
import {keys} from './keys';
import {reduce} from '../list/reduce';

export const functions =
  x =>
    reduce(
      (acc, key) => isFunction(x[key]) ? [...acc, key] : acc,
      [],
      keys(x)
    )
