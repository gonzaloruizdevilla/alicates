import {reduce} from '../list/reduce';
import {keysIn} from './keysIn';
import {isObject} from '../type/isObject';

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
