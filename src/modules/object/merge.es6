import {curry} from '../functional/curry';
import {reduce} from '../list/reduce';
import {keys} from './keys';

export const merge =
  curry(
    (a, b) => reduce(
      (acc, key) => (acc[key] = b[key], acc),
      reduce(
        (acc, key) => (acc[key] = a[key], acc),
        {},
        keys(a)
      ),
      keys(b)
    )
  );
