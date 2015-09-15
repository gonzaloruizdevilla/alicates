import {keysIn} from './keysIn';
import {reduce} from '../list/reduce';

export const valuesIn =
  a => reduce((acc, key) => [...acc, a[key]], [], keysIn(a));
