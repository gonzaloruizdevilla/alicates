import {reduce} from '../list/reduce';
import {keysIn} from './keysIn';

export const shallowClone =
  x =>
    reduce(
      (acc, key) => (acc[key] = x[key], acc),
      {},
      keysIn(x)
    );
