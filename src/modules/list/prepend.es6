import {curry} from '../functional/curry';
export const prepend =
  curry(
    (x, xs) => [x, ...xs]
  );
