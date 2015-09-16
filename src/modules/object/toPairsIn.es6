import {keysIn} from './keysIn';
import {reduce} from '../list/reduce';

export const toPairsIn =
  a =>
    reduce(
      (acc, key) => [...acc, [key, a[key]]],
      [],
      keysIn(a)
    );
