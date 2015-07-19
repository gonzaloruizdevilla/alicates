import {curry} from '../functional/curry';

const _repeat =
  (a, num, acc) =>
    num === 0 ? acc
              : _repeat(a, num - 1, [...acc, a]);


export const repeat = curry(
  (a, num) => _repeat(a, num, [])
);
