import {reduce} from '../list/reduce';
import {keysIn} from './keysIn';

export const valuesIn =
  a => reduce((acc, key) => [...acc, a[key]], [], keysIn(a));
