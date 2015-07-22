import {curry} from '../functional/curry';

export const xprod =
  curry(
    (arr1, arr2) =>
      [for (a of arr1) for (b of arr2) [a,b]]
  );
