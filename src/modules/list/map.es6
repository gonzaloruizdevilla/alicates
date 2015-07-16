import {curry} from '../functional/curry';
import {reduce} from './reduce';

export const map = curry((fn, arr) => reduce((acc, x) => [...acc, fn(x)], [], arr));
