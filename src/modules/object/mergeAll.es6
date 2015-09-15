import {merge} from './merge';
import {reduce} from '../list/reduce';

export const mergeAll =
  xs => reduce(merge, {}, xs);
