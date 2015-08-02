import {multiply} from './multiply';
import {reduce} from '../list/reduce';

export const product =
  xs => reduce(multiply, 1, xs);
