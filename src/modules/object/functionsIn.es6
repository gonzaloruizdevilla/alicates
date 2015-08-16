import {isFunction} from '../type/isFunction';
import {keysIn} from './keysIn';
import {reduce} from '../list/reduce';

export const functionsIn =
  x =>
    reduce(
      (acc, key) => isFunction(x[key]) ? [...acc, key] : acc,
      [],
      keysIn(x)
    )
