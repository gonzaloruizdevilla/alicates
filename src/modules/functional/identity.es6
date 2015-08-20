import {curry} from './curry';

export const identity =
  curry(
    a => a
  );
