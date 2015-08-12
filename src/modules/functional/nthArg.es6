import {nth} from '../list/nth';

export const nthArg =
  n =>
    (...args) => nth(n, args);
