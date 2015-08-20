import {containsWith} from '../list/containsWith';
import {curryN} from '../functional/curryN';
import {filter} from '../list/filter';
import {none} from '../list/none';
import {uniq} from '../list/uniq';

export
  const differenceWith = curryN(
    3,
    (fn, arr, ...others) => uniq(filter(
        el => (none(containsWith(fn, el), others)),
        arr
    ))
  );
