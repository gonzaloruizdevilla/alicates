import {containsWith} from '../list/containsWith';
import {curry} from '../functional/curry';
import {filter} from '../list/filter';
import {none} from '../list/none';
import {uniq} from '../list/uniq';

export
  const differenceWith = curry(
    (fn, arr, ...others) => uniq(filter(
        el => (none(containsWith(fn, el), others)),
        arr
    )),
    3
  );
