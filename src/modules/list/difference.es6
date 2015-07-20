import {curry} from '../functional/curry';
import {contains} from './contains';
import {none} from './none';
import {filter} from './filter';

export
  const difference = curry((arr, ...others) => filter(
        el => (none(contains(el), others)),
        arr
  ), 2);
