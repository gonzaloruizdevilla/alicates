import {curryN} from './curryN';
import {head} from '../list/head';
import {last} from '../list/last';
import {tail} from '../list/tail';

/* jshint -W016*/
const _addIndex =
  (idx, indexed, fn, xs, rest) => indexed(
    ((...args) => fn(...args, idx++, xs)),
    ...rest
  );
/* jshint +W016*/

export const addIndex =
  (indexed) =>
    curryN(
      indexed.length,
      (...args) => _addIndex(0, indexed, head(args), last(args), tail(args))
    );
