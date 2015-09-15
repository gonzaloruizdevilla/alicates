import {keysIn} from './keysIn';
import {reduce} from '../list/reduce';

export const shallowClone =
  x =>
    reduce(
      (acc, key) => (acc[key] = x[key], acc),
      {},
      keysIn(x)
    );
