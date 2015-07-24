import {isArray} from '../type/isArray';
import {reduce} from './reduce';

export const  unnest =
  xs => reduce(
    (acc, x) => isArray(x) ? [...acc, ...x] : [...acc, x],
    [],
    xs);
