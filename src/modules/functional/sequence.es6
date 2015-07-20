import {reduce} from '../list/reduce';

export const sequence = (...fns) => a => reduce((a, fn) => fn(a), a, fns);
