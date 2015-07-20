import {curry} from '../functional/curry';

export const take =
  curry(
    (n, arr) => typeof arr === 'string' ? arr.substr(0, (n < 0 ? undefined : n))
                                        : arr.slice(0, (n < 0 ? undefined : n))
  );
