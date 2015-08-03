import {curry} from '../functional/curry';
import {reduce} from '../list/reduce';

export const countBy =
  curry(
    (fn, xs) => reduce(
      (acc, x) => (acc[fn(x)] = (parseInt(acc[fn(x)]) || 0) + 1, acc),
      {},
      xs
    )
  );
