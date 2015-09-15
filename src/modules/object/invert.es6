import {isArray} from '../type/isArray';
import {isObject} from '../type/isObject';
import {keys} from './keys';
import {reduce} from '../list/reduce';


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
