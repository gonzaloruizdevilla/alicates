import {reduce} from '../list/reduce';
import {map} from '../list/map';

export const apply = (fns, arr) => reduce((acc, fn) => [...acc, ...map(fn, arr)], [], fns);
