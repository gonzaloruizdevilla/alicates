import {keys} from './keys';
import {reduce} from '../list/reduce';

export const toPairs =
  a =>
    reduce(
      (acc, key) => [...acc, [key, a[key]]],
      [],
      keys(a)
    );
