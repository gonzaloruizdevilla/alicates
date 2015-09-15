import {isObject} from '../type/isObject';
import {keysIn} from './keysIn';
import {reduce} from '../list/reduce';

const _invertObj =
  x =>
    reduce(
      (acc, key) => (acc[x[key]] = key, acc),
      {},
      keysIn(x)
    );

export const invertObj =
  x =>
    isObject(x) ? _invertObj(x)
                : {};
