import {reduce} from '../list/reduce';
import {map}    from '../list/map';

export const ap =
  (fns, arr) =>
    reduce((acc, fn) => [...acc, ...map(fn, arr)], [], fns);
