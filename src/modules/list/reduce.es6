import {curry} from '../functional/curry';
import {hasMethod} from '../object/hasMethod';

const _reduce =
  (fn, acc, [x, ...arr], length) =>
    acc['@@transducer/reduced'] ? acc['@@transducer/value'] :
    length === 0                ? acc
                                : _reduce(fn, fn(acc, x), arr, length - 1);

export
  const reduce = curry(
    (fn, acc, arr) => hasMethod('reduce', arr) ? arr.reduce(fn, acc)
                                               : _reduce(fn, acc, arr, arr.length)
  );
