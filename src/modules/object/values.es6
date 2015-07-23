import {reduce} from '../list/reduce';
import {keys} from './keys';

export const values =
  a => reduce((acc, key) => [...acc, a[key]], [], keys(a));
