import {keys} from './keys';
import {reduce} from '../list/reduce';

export const mapObj =
  (fn, a) =>
    reduce(
      (acc, key) => (acc[key] = fn(a[key]), acc),
      {},
      keys(a)
    );
