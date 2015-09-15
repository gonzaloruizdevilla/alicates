import {keys} from './keys';
import {reduce} from '../list/reduce';

export const values =
  a => reduce((acc, key) => [...acc, a[key]], [], keys(a));
