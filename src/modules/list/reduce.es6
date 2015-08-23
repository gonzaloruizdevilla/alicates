import {curry} from '../functional/curry';
import {isArrayLike} from '../type/isArrayLike';
import {isString} from '../type/isString';
import {isFunction} from '../type/isFunction';
import {hasMethod} from '../object/hasMethod';

class XfWrap {
  constructor(fn) {
    this.f = fn;
  }
  '@@transducer/init'() {
    throw new Error('init not implemented on XWrap');
  }
  '@@transducer/result'(acc) {
    return acc;
  }
  '@@transducer/step'(acc, x) {
    return this.f(acc, x);
  }
}


const arrayReduce =
  (xf, acc, arr, pos, length) =>
    acc && acc['@@transducer/reduced'] ? acc['@@transducer/value'] :
    length === pos                     ? xf['@@transducer/result'](acc)
                                       : arrayReduce(xf, xf['@@transducer/step'](acc, arr[pos]), arr, pos + 1, length);

const canBeReduced =
  x =>
    isArrayLike(x) || isString(x);

export
  const reduce = curry(
    (fn, acc, arr) =>
      (
        fn = isFunction(fn) ? new XfWrap(fn) : fn,
        canBeReduced(arr)         ? arrayReduce(fn, acc, arr, 0, arr.length) :
        hasMethod('reduce', arr)  ? arr.reduce(fn, acc)
                                  : null
      )

  );
