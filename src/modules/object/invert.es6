import {reduce} from '../list/reduce';
import {keys} from './keys';
import {isObject} from '../type/isObject';
import {isArray} from '../type/isArray';


const _invert =
  x =>
    reduce(
      (acc, key) => (
        acc[x[key]] = isArray(acc[x[key]]) ? [...acc[x[key]], key] : [key],
        acc),
      {},
      keys(x)
    );

export const invert =
  x =>
    isObject(x) ? _invert(x)
                : {};
