import {curry} from '../functional/curry';
import {slice} from './slice';

export const insertAll =
  curry(
    (pos, xs, ys) =>
      [...slice(0, pos, ys), ...xs, ...slice(pos, Infinity, ys)]
  );
