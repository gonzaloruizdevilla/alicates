import {curry} from '../functional/curry';
import {slice} from './slice';

export const insert =
  curry(
    (pos, x, xs) =>
      [...slice(0, pos, xs), x, ...slice(pos, Infinity, xs)]
  );
