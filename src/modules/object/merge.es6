import {curry} from '../functional/curry';
import {keys} from './keys';
import {reduce} from '../list/reduce';

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
