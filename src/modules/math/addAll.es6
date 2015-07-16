import {add} from './add';
import {reduce} from '../list/reduce';

export const addAll = (...args) => reduce(add, 0, args);
