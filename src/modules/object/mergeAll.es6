
import {reduce} from '../list/reduce';
import {merge} from './merge';

export const mergeAll =
  xs => reduce(merge, {}, xs);
