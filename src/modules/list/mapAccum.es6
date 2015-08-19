import {curry} from '../functional/curry';
import {reduce} from './reduce';

const _mapAccum =
  (fn, a, xs) =>
    reduce(
      (acc, x, value) => (
          value = fn(acc[0], x),
          [value[0], [...acc[1], value[1]]]
      ),
      [a, []],
      xs
    );

export const mapAccum =
  curry(_mapAccum);
